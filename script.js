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
  { image: "https://i.imgur.com/NoxyD95.jpg", anecdote: "Her first time exploring the outdoors." },
  { image: "https://i.imgur.com/xZpkvW2.jpg", anecdote: "That day she found her favorite toy!" },
  { image: "https://i.imgur.com/aTPupbn.jpg", anecdote: "Look at that guilty face!" },
  { image: "https://i.imgur.com/nVJrO3m.jpg", anecdote: "She loves playing fetch." },
  { image: "https://i.imgur.com/OxyMk1M.jpg", anecdote: "Another sunny day, another adventure!" },
  { image: "https://i.imgur.com/xwaT91V.jpg", anecdote: "Her favorite spot in the house." },
  { image: "https://i.imgur.com/enRk8J1.jpg", anecdote: "Such a playful moment caught on camera." },
  { image: "https://i.imgur.com/Yf4hZT0.jpg", anecdote: "She loves belly rubs after a walk." },
  { image: "https://i.imgur.com/UlSS9fe.jpg", anecdote: "That one time she jumped into the pool!" },
  { image: "https://i.imgur.com/rpccH6a.jpg", anecdote: "A quiet moment of relaxation." },
  { image: "https://i.imgur.com/7iDtkEP.jpg", anecdote: "Always curious and exploring!" },
  { image: "https://i.imgur.com/rlzF1rF.jpg", anecdote: "The day she made a new friend." },
  { image: "https://i.imgur.com/4WHIfFp.jpg", anecdote: "Her first trip to the park!" },
  { image: "https://i.imgur.com/0h6qVkY.jpg", anecdote: "When she got her paws on a treat." },
  { image: "https://i.imgur.com/bmfN7aX.jpg", anecdote: "Ready for another adventure!" },
  { image: "https://i.imgur.com/gBCfAqh.jpg", anecdote: "Always full of energy and excitement." },
  { image: "https://i.imgur.com/AfQ3AiI.jpg", anecdote: "That mischievous look!" },
  { image: "https://i.imgur.com/XdoKmtN.jpg", anecdote: "Caught mid-action in a playful run." },
  { image: "https://i.imgur.com/ugOdAD7.jpg", anecdote: "Always happy to see you." },
  { image: "https://i.imgur.com/tEZVCqk.jpg", anecdote: "so small and monkoo" },
  { image: "https://i.imgur.com/UTxVwXu.jpg", anecdote: "Always looking for new adventures." },
  { image: "https://i.imgur.com/kUjM1rV.jpg", anecdote: "Her favorite sunny day activity." },
  { image: "https://i.imgur.com/aGDjbcL.jpg", anecdote: "A moment of calm after a busy day." },
  { image: "https://i.imgur.com/aqRhIvu.jpg", anecdote: "he always looks the cutest when he’s MIs lol" },
  { image: "https://i.imgur.com/5mYlLQI.jpg", anecdote: "Curious about everything around her." },
  { image: "https://i.imgur.com/uz0xBh0.jpg", anecdote: "lol poor mooku feels betrayed " },
  { image: "https://i.imgur.com/ecymWIn.jpg", anecdote: "homeowner tatie!." },
  { image: "https://i.imgur.com/YhUVnO5.jpg", anecdote: "lol can’t believe we believed this dunce when her and her 12 yr old coworker claimed to have gotten multiple dogs from pet express haha " },
  { image: "https://i.imgur.com/s9wQY34.jpg", anecdote: “lol this pose always makes for the cutest pics… only problem is he looks so cute I always feel stuck cus I don’t want to move lol." },
  { image: "https://i.imgur.com/qKSSs9q.jpg", anecdote: "She found her favorite stick that day." },
  { image: "https://i.imgur.com/WITsc8w.jpg", anecdote: "one of tatie cutest " },
  { image: "https://i.imgur.com/Yu4uSsj.jpg", anecdote: "Ready to greet everyone with a smile." },
  { image: "https://i.imgur.com/0qLYvzI.jpg", anecdote: "reunited with monkoo after Hawaii " },
  { image: "https://i.imgur.com/iPOgLO2.jpg", anecdote: "Her first snowfall experience!" },
  { image: "https://i.imgur.com/OKfksI5.jpg", anecdote: "Chasing her tail for fun." },
  { image: "https://i.imgur.com/a2OjlkK.jpg", anecdote: "That one time she got into the flowers." },
  { image: "https://i.imgur.com/xPtKnKZ.jpg", anecdote: "Always on an adventure." },
  { image: "https://i.imgur.com/63ycNvO.jpg", anecdote: "Proud of her new toy." },
  { image: "https://i.imgur.com/3eWfotB.jpg", anecdote: "That peaceful nap after playing." },
  { image: "https://i.imgur.com/1R2kFw2.jpg", anecdote: "The happiest dog on a walk." },
  { image: "https://i.imgur.com/7AKGBbx.jpg", anecdote: "Johnson trying to bond with tatie shortly after Kai attempted to eat/pipe him…tatie is skeptical tho. Too little too late Johnny!" },
  { image: "https://i.imgur.com/3ByrvLA.jpg", anecdote: "Her favorite cozy spot." },
  { image: "https://i.imgur.com/qCyJnt3.jpg", anecdote: "That day she barked at the vacuum." },
  { image: "https://i.imgur.com/s7LxYYh.jpg", anecdote: "Adventurous as always." },
  { image: "https://i.imgur.com/rI0TGAW.jpg", anecdote: "Always ready for the next big thing." },
  { image: "https://i.imgur.com/6cu3plw.jpg", anecdote: "tatie potatoe 🥰" },
  { image: "https://i.imgur.com/8am7oTM.jpg", anecdote: "Birthday Tatie!!" },
  { image: "https://i.imgur.com/Ozvu7nq.jpg", anecdote: "watching these 2 play with tatie is one of my absolute favorite things in the world ." },
  { image: "https://i.imgur.com/8jvbohF.jpg", anecdote: "9/12/23 - tatie had just gotten shaved down and we took a nice walk across that sketchy overpass lol. Also Kinna’s bitch ass friend K Rao responded to my story saying “omg this ugly dog is taking over your life haha”….dude sucks. He’s probably just mad that him and his wife are ugly as shit!! " }
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
