const mainBtn = document.querySelector('.main-btn');
const hiddenBtns = document.querySelector('.hidden-btns');

mainBtn.addEventListener('click', () => {
  hiddenBtns.classList.toggle('show');
 
});
function myFunction(x) {
  x.classList.toggle("change");
}
// Select all image elements
const images = document.querySelectorAll('.relative img');

// Set index to 0
let index = 0;

// Set interval to scroll images automatically
setInterval(() => {
  // Set opacity to 0 on current image
  images[index].classList.remove('opacity-100');
  images[index].classList.add('opacity-0');
  
  // Increment index
  index++;
  
  // Check if index is greater than or equal to number of images
  if (index >= images.length) {
    // Set index to 0
    index = 0;
  }
  
  // Set opacity to 100 on new image
  images[index].classList.remove('opacity-0');
  images[index].classList.add('opacity-100');
}, 5000);
