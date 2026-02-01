const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

function moveNoButton() {
  const container = document.querySelector(".buttons");

  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// runs away when touched or hovered
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  message.innerText = "YES 😌💖 Good job. Now make the plans ASAP!";
});
