let selectedRating = null;

document.querySelectorAll(".rating-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".rating-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
    selectedRating = button.textContent;
  });
});

function feedback() {
  if (!selectedRating) {
    alert("Please, select a score before submitting.");
    return;
  }

  const content = document.querySelector("#default-content");
  const congrats = document.querySelector("#congrats-content");
  const score = document.querySelector("#score");

  score.textContent = selectedRating;

  content.style.display = "none";
  congrats.style.display = "block";
}