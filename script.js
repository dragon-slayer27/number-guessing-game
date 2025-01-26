let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 100;
let highScore = 0;

const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("high-score");
const resetBtn = document.getElementById("reset-btn");

submitBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "⚠️ Enter a number between 1 and 100!";
    return;
  }

  if (userGuess === randomNumber) {
    feedback.textContent = "🎉 Correct! You guessed the number!";
    feedback.style.color = "limegreen";
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  } else {
    score -= 10;
    scoreDisplay.textContent = score;
    feedback.textContent =
      userGuess > randomNumber ? "📉 Too high!" : "📈 Too low!";
    feedback.style.color = "orange";

    if (score <= 0) {
      feedback.textContent = "💀 Game over! You ran out of points!";
      feedback.style.color = "red";
      submitBtn.disabled = true;
    }
  }

  guessInput.value = "";
});

resetBtn.addEventListener("click", () => {
  score = 100;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  scoreDisplay.textContent = score;
  feedback.textContent = "Make your first guess!";
  feedback.style.color = "white";
  submitBtn.disabled = false;
  guessInput.value = "";
});
