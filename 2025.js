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
  // Force midnight to avoid timezone shifting the date
  const d = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(d.getTime())) return isoDate; // fallback if malformed
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function renderEntry(entry) {
  const dateLabel = formatDateLabel(entry.date);

  return `
    <section style="margin: 26px 0; padding-bottom: 18px; border-bottom: 1px solid #ddd;">
      <div style="font-size: 0.95em; opacity: 0.7; margin-bottom: 8px;">
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
        ${escapeHtml(entry.caption)}
      </p>
    </section>
  `;
}

// This is called automatically after password unlock (via script.js)
window.initYearInReview = async function initYearInReview() {
  const container = document.getElementById("yir-container");
  if (!container) return;

  try {
    const res = await fetch("./2025.json", { cache: "no-store" });
    const entries = await res.json();

    entries.sort((a, b) => (a.date || "").localeCompare(b.date || ""));

    container.innerHTML = entries.map(renderEntry).join("");
  } catch (e) {
    console.error("Failed to load 2025.json", e);
    container.innerHTML =
      "<p style='text-align:center;'>Couldn’t load 2025.json — check formatting and file path.</p>";
  }
};
