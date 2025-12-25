let yirEntries = [];
let yirIndex = 0;

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDateLabel(isoDate) {
  if (!isoDate) return "";
  const d = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function renderCurrent() {
  const card = document.getElementById("yir-card");
  const progress = document.getElementById("yir-progress");
  const prevBtn = document.getElementById("yir-prev-btn");
  const nextBtn = document.getElementById("yir-next-btn");

  if (!card || !progress || !prevBtn || !nextBtn) return;

  if (!yirEntries.length) {
    card.innerHTML = "<p style='text-align:center;'>No memories yet.</p>";
    progress.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  // Clamp index
  yirIndex = Math.max(0, Math.min(yirIndex, yirEntries.length - 1));

  const entry = yirEntries[yirIndex];
  const dateLabel = formatDateLabel(entry.date);

  progress.textContent = `${yirIndex + 1} / ${yirEntries.length}`;

  card.innerHTML = `
    <section style="margin: 16px 0; padding-bottom: 8px;">
      <div style="font-size: 0.95em; opacity: 0.7; margin-bottom: 10px; text-align:center;">
        ${escapeHtml(dateLabel)}
      </div>

      <div style="margin: 10px 0;">
        <img
          src="${escapeHtml(entry.image)}"
          alt=""
          style="width:100%; max-width:900px; border-radius:10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"
        />
      </div>

      <p style="text-align:center; margin-top: 14px; font-size: 1.2em; line-height: 1.4; padding: 0 10px;">
        ${escapeHtml(entry.caption || "")}
      </p>
    </section>
  `;

  prevBtn.disabled = (yirIndex === 0);
  nextBtn.disabled = (yirIndex === yirEntries.length - 1);
}

function wireControls() {
  const prevBtn = document.getElementById("yir-prev-btn");
  const nextBtn = document.getElementById("yir-next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      yirIndex -= 1;
      renderCurrent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      yirIndex += 1;
      renderCurrent();
    });
  }

  // Optional keyboard support: left/right arrows
  document.addEventListener("keydown", (e) => {
    if (!yirEntries.length) return;

    if (e.key === "ArrowLeft" && yirIndex > 0) {
      yirIndex -= 1;
      renderCurrent();
    }
    if (e.key === "ArrowRight" && yirIndex < yirEntries.length - 1) {
      yirIndex += 1;
      renderCurrent();
    }
  });
}

// Called after password unlock by script.js
window.initYearInReview = async function initYearInReview() {
  try {
    const res = await fetch("./2025.json", { cache: "no-store" });
    const entries = await res.json();

    // Chronological sort
    entries.sort((a, b) => (a.date || "").localeCompare(b.date || ""));

    yirEntries = entries;
    yirIndex = 0;

    wireControls();
    renderCurrent();
  } catch (e) {
    console.error("Failed to load 2025.json", e);
    const card = document.getElementById("yir-card");
    if (card) {
      card.innerHTML = "<p style='text-align:center;'>Couldn’t load 2025.json — check formatting.</p>";
    }
  }
};
