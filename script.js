const PASSWORD = "44"; // change if you want

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

/**
 * If an image fails to load (404 due to extension case mismatch etc),
 * try a small set of common extension/case variants.
 */
function buildFallbackCandidates(src) {
  const candidates = [];
  const lower = src.toLowerCase();

  // If it already ends with a known extension, swap to variants
  const exts = [".jpeg", ".jpg", ".png"];
  const variants = [
    ".jpeg", ".JPEG",
    ".jpg", ".JPG",
    ".png", ".PNG"
  ];

  const found = exts.find(ext => lower.endsWith(ext));
  if (found) {
    const base = src.slice(0, -found.length);
    for (const v of variants) candidates.push(base + v);
  } else {
    // No extension? (unlikely) try appending
    for (const v of variants) candidates.push(src + v);
  }

  // Remove duplicates while preserving order
  return [...new Set(candidates)];
}

function setError(msg) {
  const el = document.getElementById("yir-error");
  if (el) el.textContent = msg || "";
}

function renderCurrent() {
  const card = document.getElementById("yir-card");
  const progress = document.getElementById("yir-progress");
  const prevBtn = document.getElementById("yir-prev-btn");
  const nextBtn = document.getElementById("yir-next-btn");

  if (!card || !progress || !prevBtn || !nextBtn) return;

  setError("");

  if (!yirEntries.length) {
    card.innerHTML = "<p style='text-align:center;'>No memories yet.</p>";
    progress.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  yirIndex = Math.max(0, Math.min(yirIndex, yirEntries.length - 1));
  const entry = yirEntries[yirIndex];

  progress.textContent = `${yirIndex + 1} / ${yirEntries.length}`;

  const dateLabel = escapeHtml(formatDateLabel(entry.date));
  const caption = escapeHtml(entry.caption || "");
  const src = entry.image || "";

  // Render with an onerror fallback handler
  card.innerHTML = `
    <div class="yir-date">${dateLabel}</div>
    <div class="yir-image-wrap">
      <img id="yir-img" class="yir-image" src="${escapeHtml(src)}" alt="" />
    </div>
    <p class="yir-caption">${caption}</p>
  `;

  const img = document.getElementById("yir-img");
  if (img) {
    const candidates = buildFallbackCandidates(src);
    let attempt = 0;

    img.onerror = () => {
      attempt += 1;
      if (attempt >= candidates.length) {
        setError(`Could not load image: ${src}`);
        return;
      }
      img.src = candidates[attempt];
    };
  }

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

  document.addEventListener("keydown", (e) => {
    if (!yirEntries.length) return;

    if (e.key === "ArrowLeft" && yirIndex > 0) {
      yirIndex -= 1;
      renderCurrent();
    } else if (e.key === "ArrowRight" && yirIndex < yirEntries.length - 1) {
      yirIndex += 1;
      renderCurrent();
    }
  });
}

async function initYearInReview() {
  try {
    const res = await fetch("./2025.json", { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to fetch 2025.json: ${res.status} ${res.statusText}`);
    }

    const entries = await res.json();

    // Sort by date; filenames like 1.3.jpeg are fine
    entries.sort((a, b) => (a.date || "").localeCompare(b.date || ""));

    yirEntries = entries;
    yirIndex = 0;

    wireControls();
    renderCurrent();
  } catch (e) {
    console.error(e);
    setError("Couldn’t load 2025.json — confirm the file exists in the repo root and is valid JSON.");
  }
}

// Password
function checkPassword() {
  const inputEl = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");
  const input = inputEl ? inputEl.value : "";

  if (input === PASSWORD) {
    const pw = document.getElementById("password-screen");
    const content = document.getElementById("content");

    if (pw) pw.classList.add("hidden");
    if (content) content.classList.remove("hidden");

    initYearInReview();
  } else {
    if (errorMessage) errorMessage.textContent = "Incorrect password. Try again!";
  }
}

// Wire password button + Enter key reliably
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("password-btn");
  const input = document.getElementById("password-input");

  if (btn) btn.addEventListener("click", checkPassword);

  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkPassword();
    });
  }
});
