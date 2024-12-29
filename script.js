const PASSWORD = "44"; // Change this password to whatever you want

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
  { image: "https://i.imgur.com/UI0bqHh.jpg", anecdote: "Our first pic with our monkoo :)." },
  { image: "https://i.imgur.com/NoxyD95.jpg", anecdote: “    “ },
  { image: "https://i.imgur.com/xZpkvW2.jpg", anecdote: "" },
  { image: "https://i.imgur.com/aTPupbn.jpg", anecdote: "His Eyes!!! " },
  { image: "https://i.imgur.com/nVJrO3m.jpg", anecdote: "" },
  { image: "https://i.imgur.com/OxyMk1M.jpg", anecdote: "" },
  { image: "https://i.imgur.com/xwaT91V.jpg", anecdote: "" },
  { image: "https://i.imgur.com/enRk8J1.jpg", anecdote: "that doofy face!." },
  { image: "https://i.imgur.com/Yf4hZT0.jpg", anecdote: "12/10/22….. less than 24 hours after we scooped him from Saugus." },
  { image: "https://i.imgur.com/UlSS9fe.jpg", anecdote: "lol this picture sucks" },
  { image: "https://i.imgur.com/rpccH6a.jpg", anecdote: “goofy boi…rare moment he wasn’t tryna eat this thing." },
  { image: "https://i.imgur.com/7iDtkEP.jpg", anecdote: "cozy afternoon monka”},
  { image: "https://i.imgur.com/rlzF1rF.jpg", anecdote: "snow boi." },
  { image: "https://i.imgur.com/4WHIfFp.jpg", anecdote: "Tatie! no means no!! This mf cannot take a hint" },
  { image: "https://i.imgur.com/0h6qVkY.jpg", anecdote: "lol snowboi ." },
  { image: "https://i.imgur.com/bmfN7aX.jpg", anecdote: "the best" },
  { image: "https://i.imgur.com/gBCfAqh.jpg", anecdote: "snowboi is very focused " },
  { image: "https://i.imgur.com/AfQ3AiI.jpg", anecdote: "That mischievous look!" },
  { image: "https://i.imgur.com/XdoKmtN.jpg", anecdote: "are you gd kidding me" },
  { image: "https://i.imgur.com/ugOdAD7.jpg", anecdote: "the perfect scarf" },
  { image: "https://i.imgur.com/tEZVCqk.jpg", anecdote: "so small and monkoo" },
  { image: "https://i.imgur.com/UTxVwXu.jpg", anecdote: "perfection" },
  { image: "https://i.imgur.com/kUjM1rV.jpg", anecdote: "Snow scabo NOT feeling it." },
  { image: "https://i.imgur.com/aGDjbcL.jpg", anecdote: "Target scabo is so cute and helplesss in the cart lol" },
  { image: "https://i.imgur.com/aqRhIvu.jpg", anecdote: "he always looks the cutest when he’s MIs lol" },
  { image: "https://i.imgur.com/5mYlLQI.jpg", anecdote: "sad wet scabo " },
  { image: "https://i.imgur.com/uz0xBh0.jpg", anecdote: "lol poor mooku feels betrayed" },
  { image: "https://i.imgur.com/ecymWIn.jpg", anecdote: "homeowner tatie!." },
  { image: "https://i.imgur.com/YhUVnO5.jpg", anecdote: "lol can’t believe we believed this dunce when her and her 12 yr old coworker claimed to have gotten multiple dogs from pet express haha" },
  { image: "https://i.imgur.com/s9wQY34.jpg", anecdote: "lol this pose always makes for the cutest pics… only problem is he looks so cute I always feel stuck cus I don’t want to move lol." },
  { image: "https://i.imgur.com/qKSSs9q.jpg", anecdote: "FUCK YALL " },
  { image: "https://i.imgur.com/WITsc8w.jpg", anecdote: "one of tatie cutest" },
  { image: "https://i.imgur.com/Yu4uSsj.jpg", anecdote: "the cutest lil 1 yr old scabo" },
  { image: "https://i.imgur.com/0qLYvzI.jpg", anecdote: "reunited with monkoo after Hawaii" },
  { image: "https://i.imgur.com/iPOgLO2.jpg", anecdote: "Dobby the house elf at speedway" },
  { image: "https://i.imgur.com/OKfksI5.jpg", anecdote: "July 4, 2023 - monkoo’s first fun day at the beach" },
image: "https://i.imgur.com/Ozvu7nq.jpg", anecdote: "watching these 2 play with tatie is one of my absolute favorite things in the world." }
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