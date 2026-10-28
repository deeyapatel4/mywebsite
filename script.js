
/*
    IS 409 - JavaScript Interactive Website
    Deeya Patel

    Interactive Features:
    1. Personalized Greeting
    2. Change Text
    3. Change Background Color
    4. Show and Hide Fun Facts
    5. Random Quote
*/


// FEATURE 1: PERSONALIZED GREETING

const greetButton = document.getElementById("greetButton");
const visitorName = document.getElementById("visitorName");
const greeting = document.getElementById("greeting");

function greetVisitor() {
    const name = visitorName.value.trim();

    if (name === "") {
        greeting.textContent = "Please enter your name first!";
    } else {
        greeting.textContent = "Welcome to my website, " + name + "!";
    }
}

greetButton.addEventListener("click", greetVisitor);


// FEATURE 2: CHANGE TEXT

const changeButton = document.getElementById("changeButton");
const aboutMessage = document.getElementById("aboutMessage");

function changeMessage() {
    aboutMessage.textContent =
        "I'm passionate about connecting with people, giving back to my communities, and finding new opportunities to learn and grow!";
}

changeButton.addEventListener("click", changeMessage);


// FEATURE 3: CHANGE BACKGROUND COLOR

const colorButton = document.getElementById("colorButton");

function changeBackground() {
    if (document.body.style.backgroundColor === "rgb(232, 240, 254)") {
        document.body.style.backgroundColor = "";
        colorButton.textContent = "Change Background";
    } else {
        document.body.style.backgroundColor = "rgb(232, 240, 254)";
        colorButton.textContent = "Reset Background";
    }
}

colorButton.addEventListener("click", changeBackground);


// FEATURE 4: SHOW AND HIDE FUN FACTS

const factButton = document.getElementById("factButton");
const funFacts = document.getElementById("funFacts");

function toggleFunFacts() {
    funFacts.hidden = !funFacts.hidden;

    if (funFacts.hidden) {
        factButton.textContent = "Show Fun Facts";
        factButton.setAttribute("aria-expanded", "false");
    } else {
        factButton.textContent = "Hide Fun Facts";
        factButton.setAttribute("aria-expanded", "true");
    }
}

factButton.addEventListener("click", toggleFunFacts);


// FEATURE 5: RANDOM QUOTE

const quoteButton = document.getElementById("quoteButton");
const quoteDisplay = document.getElementById("quoteDisplay");

const quotes = [
    "Confidence should never replace curiosity.",
    "Never stop learning, growing, and exploring.",
    "The best experiences begin outside your comfort zone.",
    "Be the reason someone feels welcomed and included.",
    "Growth begins when you embrace change."
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteDisplay.textContent = quotes[randomIndex];
}

quoteButton.addEventListener("click", showRandomQuote);
