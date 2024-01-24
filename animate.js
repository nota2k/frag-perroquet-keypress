let slideDown = document.querySelectorAll('.cut');

let arrowRight = `
<div class="arrows"></div>`;

Array.from(slideDown).forEach(ele => {
    ele.addEventListener("click", likeButtonClick);
});
// Add class on button click
function likeButtonClick() {
  let result = this.classList.toggle("active");
  // let arrowRemove = document.querySelector('.arrow-btn');
  
  if (result) {
    this.classList.remove("is-inactive");
    // this.innerHTML = arrowRight;
  } else {
    this.classList.add("is-inactive");
    // this.innerHTML = "";
  }
}




