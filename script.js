
/* =========================================
   AQUAVOLT — JAVASCRIPT
   AI PROJECT: ECOSENSE GUARDIAN
========================================= */


/* DASHBOARD VALUES */

let water = 78;
let energy = 64;


/* UPDATE DASHBOARD */

function updateDashboard() {
  // Simulated readings that change slightly
  water += Math.floor(Math.random() * 5) - 2;
  energy += Math.floor(Math.random() * 5) - 2;

  // Keep the readings within a set range
  water = Math.max(55, Math.min(95, water));
  energy = Math.max(45, Math.min(90, energy));

  // Dashboard numbers
  document.getElementById("waterValue").textContent = water;
  document.getElementById("energyValue").textContent = energy;

  // Hero numbers
  document.getElementById("heroWater").textContent = water + "%";
  document.getElementById("heroEnergy").textContent = energy + "%";

  // Progress bars
  document.getElementById("waterBar").style.width = water + "%";
  document.getElementById("energyBar").style.width = energy + "%";

  // Water status
  const waterStatus = document.getElementById("waterStatus");

  if (water < 65) {
    waterStatus.textContent = "Water level is getting low";
  } else if (water > 88) {
    waterStatus.textContent = "Water level is high";
  } else {
    waterStatus.textContent = "Normal level";
  }

  // Energy status
  const energyStatus = document.getElementById("energyStatus");

  if (energy > 75) {
    energyStatus.textContent = "Higher than usual";
  } else {
    energyStatus.textContent = "Efficient";
  }
}


/* ECOSENSE GUARDIAN AI MESSAGES */

const aiMessages = [
  "Welcome! Let's make every drop and every watt count.",
  "No unnecessary water flow detected.",
  "Smart devices can help reduce resource waste.",
  "Check pipes regularly to help prevent water leaks.",
  "Motion sensors can help manage room lighting.",
  "Switch off devices when they are not needed.",
  "Energy-saving habits make a difference!",
  "EcoSense Guardian is here to support smarter choices."
];

let messageIndex = 0;

function updateAI() {
  const aiMessage = document.getElementById("aiMessage");

  if (!aiMessage) return;

  aiMessage.textContent = aiMessages[messageIndex];

  messageIndex = (messageIndex + 1) % aiMessages.length;
}


/* CLOCK */

function updateClock() {
  const clock = document.getElementById("clock");

  if (!clock) return;

  clock.textContent = new Date().toLocaleTimeString();
}


/* DEVICE TOGGLES */

const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isActive = toggle.classList.toggle("active");

    toggle.setAttribute("aria-pressed", String(isActive));
  });
});


/* MOBILE NAVIGATION */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu after a navigation link is clicked
  document.querySelectorAll(".nav-links a").forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });
}


/* START AQUAVOLT */

updateDashboard();
updateAI();
updateClock();

// Refresh dashboard values every 3.5 seconds
setInterval(updateDashboard, 3500);

// Change AI messages every 4.5 seconds
setInterval(updateAI, 4500);

// Update the clock every second
setInterval(updateClock, 1000);
