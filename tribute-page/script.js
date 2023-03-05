const mainBtn = document.querySelector('.main-btn');
const hiddenBtns = document.querySelector('.hidden-btns');

mainBtn.addEventListener('click', () => {
  hiddenBtns.classList.toggle('show');
});
function myFunction(x) {
  x.classList.toggle("change");
}
const images = document.querySelectorAll('.relative img');
let index = 0;
setInterval(() => {
  images[index].classList.remove('opacity-100');
  images[index].classList.add('opacity-0');
  index++;
  if (index >= images.length) {
    index = 0;
  }
  images[index].classList.remove('opacity-0');
  images[index].classList.add('opacity-100');
}, 5000);
