const mainBtn = document.querySelector('.main-btn');
const hiddenBtns = document.querySelector('.hidden-btns');

mainBtn.addEventListener('click', () => {
  hiddenBtns.classList.toggle('show');
  mainBtn.textContent = hiddenBtns.classList.contains('show') ? 'Menu' : 'Menu';
});