const PASSWORD = "waverly"; // Change this password to whatever you want

// Password Protection
function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorMessage = document.getElementById("error-message");
  if (input === PASSWORD) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    errorMessage.textContent = "Incorrect password. Try again!";
  }
}

// Fetch Images and Anecdotes
const images = [
  "images/test1.jpg",  // Replace with your image filenames
  "images/test2.jpg",
  "images/download.jpg"
];

let anecdotes = [];

// Fetch anecdotes from JSON file
fetch('anecdotes.json')
  .then(response => response.json())
  .then(data => {
    anecdotes = data;
    showRandomMemory();
  })
  .catch(err => console.error("Error loading anecdotes:", err));

// Random Memory Function
function showRandomMemory() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const randomAnecdote = anecdotes[Math.floor(Math.random() * anecdotes.length)];
  
  document.getElementById('dog-image').src = randomImage;
  document.getElementById('anecdote').textContent = randomAnecdote;
}

// Button to Show Another Memory
document.getElementById("new-anecdote-btn").addEventListener("click", showRandomMemory);
