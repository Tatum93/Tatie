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

// Image and Anecdote Pairs
const memories = [
  { image: "https://i.imgur.com/UI0bqHh.jpg", anecdote: "That time she tried to sneak into bed without you noticing." },
  { image: "https://i.imgur.com/NoxyD95.jpg", anecdote: "Her first snow day—she couldn’t stop jumping around!" },
  { image: "https://i.imgur.com/xZpkvW2.jpg", anecdote: "She proudly carried this stick the entire walk!" },
  { image: "https://i.imgur.com/aTPupbn.jpg", anecdote: "That face she makes when she knows she’s in trouble." },
  { image: "https://i.imgur.com/nVJrO3m.jpg", anecdote: "When she found a puddle and decided it was her new pool." },
  { image: "https://i.imgur.com/OxyMk1M.jpg", anecdote: "The day she made friends with a butterfly in the garden." },
  { image: "https://i.imgur.com/xwaT91V.jpg", anecdote: "Her first time at the beach—she couldn't stop digging!" },
  { image: "https://i.imgur.com/enRk8J1.jpg", anecdote: "That moment she fell asleep with her favorite toy." },
  { image: "https://i.imgur.com/Yf4hZT0.jpg", anecdote: "When she barked at her own reflection in the mirror." },
  { image: "https://i.imgur.com/UlSS9fe.jpg", anecdote: "She thought this was her new bed. It wasn’t." },
  { image: "https://i.imgur.com/rpccH6a.jpg", anecdote: "That time she got stuck under the couch and panicked." },
  { image: "https://i.imgur.com/7iDtkEP.jpg", anecdote: "She tried to chase a squirrel but tripped over her leash!" },
  { image: "https://i.imgur.com/rlzF1rF.jpg", anecdote: "Her first bath—she looked so betrayed." },
  { image: "https://i.imgur.com/4WHIfFp.jpg", anecdote: "When she refused to go inside because it was too nice out." },
  { image: "https://i.imgur.com/0h6qVkY.jpg", anecdote: "Her guilty face after stealing a sock." }
  // Add more memories here following the same pattern!
];

// Random Memory Function
function showRandomMemory() {
  const randomIndex = Math.floor(Math.random() * memories.length);
  const memory = memories[randomIndex]; // Get matching image and anecdote pair
  
  document.getElementById('dog-image').src = memory.image;
  document.getElementById('anecdote').textContent = memory.anecdote;
}

// Button to Show Another Memory
document.getElementById("new-anecdote-btn").addEventListener("click", showRandomMemory);

// Display the first random memory on load
showRandomMemory();
