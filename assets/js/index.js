let state = true;

function feedback() {
  const content = document.querySelector('#default-content');
  const buttons = document.querySelectorAll('.rating-btn');
  const congrats = document.querySelector('#congrats-content');
  const score = document.querySelector('#score');

  if (window.innerWidth < 992){
    if (state){
      content.style.display = "block";
      congrats.style.display = "none";
    } else {
      content.style.display = "none";
      congrats.style.display = "block";
    }
    state = !state;
  } else if (window.innerWidth < 1201){
    if (state){
      content.style.display = "block";
      congrats.style.display = "none";
    } else {
      content.style.display = "none";
      congrats.style.display = "block";
    }
    state = !state;
  } else {
    if (state) {
      content.style.display = "block";
      congrats.style.display = "none";
    } else {
      content.style.display = "none";
      congrats.style.display = "block";
    }
    state = !state;
  }
}