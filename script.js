// ----------------
// Scrollwheel indicator
// ----------------
var scrollContainer = document.querySelector('.scrollbar-indicator');
var scrollbar = scrollContainer.querySelector('.scrollbar');

function scrollPercent() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100 );
}

function updateProgressBar() {
scrollbar.style.width = scrollPercent() + '%';
requestAnimationFrame(updateProgressBar);
}

updateProgressBar();

// ----------------
// Clock
// ----------------
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('alsoclock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// ----------------
// Changing the quotes
// ----------------
const quotesElement = document.getElementById('quotes');
const autherElement = document.getElementById('author');


const texts = [ "'Curiosity is the most important factor for mental growth'", 
                "'Talent is the ability to prove one's strength. Gambling their future, believing in themselves and their dreams, and proving to the world their strength is real.'", 
                "'None of us is as good as all of us'", 
                "'Be yourself; everyone else is already taken.'"];
const author =[ "- Jojo Bizarre Adventure", 
                "- Blue Lock", 
                "- Ray Kroc", 
                "- Oscar Wilde"];

let currentIndex = 0;

// Function to update the text
function updateText() {
    quotesElement.classList.remove("slide-in");
    quotesElement.classList.add("slide-out");

    autherElement.classList.remove("slide-in");
    autherElement.classList.add("slide-out");

    setTimeout(() => {
        quotesElement.textContent = texts[currentIndex];
        autherElement.textContent = author[currentIndex];

        currentIndex = (currentIndex + 1) % texts.length;

        quotesElement.classList.remove("slide-out");
        quotesElement.classList.add("slide-in");
        autherElement.classList.remove("slide-out");
        autherElement.classList.add("slide-in");
    }, 600); // equal to the animation duration

}

updateText();

// Starting:
quotesElement.textContent = quotes[currentIndex];
quotesElement.classList.add("slide-in");
autherElement.textContent = author[currentIndex];
autherElement.classList.add("slide-in");
setInterval(updateText, 5000);