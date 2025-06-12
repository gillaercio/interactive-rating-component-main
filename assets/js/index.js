let state = true;
let selectedRating = null;

document.querySelectorAll('.rating-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.rating-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
    selectedRating = button.textContent;
  })
})

function feedback() {
  const content = document.querySelector('#default-content');
  const congrats = document.querySelector('#congrats-content');
  const score = document.querySelector('#score');

  if (selectedRating) {
    score.textContent = selectedRating;
  } else {
    score.textContent = "no rating";
  }

  if (window.innerWidth < 992){
    content.style.display = state ? "block" : "none";
    congrats.style.display = state ? "none" : "block";
    state = !state;
  } else if (window.innerWidth < 1201){
    content.style.display = state ? "block" : "none";
    congrats.styel.display = state ? "none" : "block";
    state = !state;
  } else {
    content.style.display = state ? "block" : "none";
    congrats.style.display = state ? "none" : "block";
    state = !state;
  }
}