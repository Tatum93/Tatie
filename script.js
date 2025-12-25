const PASSWORD = "44"; // Change this password to whatever you want

// Password Protection
function checkPassword() {
  const inputEl = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");

  const input = inputEl ? inputEl.value : "";

  if (input === PASSWORD) {
    const pw = document.getElementById("password-screen");
    const content = document.getElementById("content");

    if (pw) pw.style.display = "none";
    if (content) content.classList.remove("hidden");

    // If the current page defines a page-specific init (e.g., Year in Review), run it
    if (typeof window.initYearInReview === "function") {
      window.initYearInReview();
    }
  } else {
    if (errorMessage) errorMessage.textContent = "Incorrect password. Try again!";
  }
}

// ------------------------
// Random Memories (homepage only)
// ------------------------

const memories = [
  // Keep your existing memories array here (Imgur or local paths).
  // You can continue updating this for the random homepage.
];

// Random Memory Function
function showRandomMemory() {
  // Only run if homepage elements exist
  const imgEl = document.getElementById("dog-image");
  const textEl = document.getElementById("anecdote");
  if (!imgEl || !textEl) return;

  if (!Array.isArray(memories) || memories.length === 0) {
    textEl.textContent = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * memories.length);
  const memory = memories[randomIndex];

  imgEl.src = memory.image;
  textEl.textContent = memory.anecdote || "";
}

// Wire button only if it exists (homepage)
const btn = document.getElementById("new-anecdote-btn");
if (btn) {
  btn.addEventListener("click", showRandomMemory);
  showRandomMemory(); // first render on homepage
}
