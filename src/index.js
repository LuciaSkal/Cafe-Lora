import './style.css';

console.log('funguju!');

const navElm = document.querySelector('nav');
const navAElm = document.querySelectorAll('nav a');
console.log(navAElm)


const navClosed = () => {
 navElm.classList.toggle('nav-closed');
} 

const navBtnElm = document.querySelector('#nav-btn');
navBtnElm.addEventListener('click', navClosed);

navAElm.forEach((elm) => {
  elm.addEventListener('click', navClosed)
})

let ordered = true

const orderBtnElm = document.querySelector('.order-btn');
orderBtnElm.addEventListener('click', () => {
  if (ordered === true) {
  orderBtnElm.textContent = 'Zrušit';
  document.querySelector('.drink__cup').classList.add('drink__cup--selected');
  ordered = false
  } else {
    orderBtnElm.textContent = 'Objednat';
    document.querySelector('.drink__cup').classList.remove('drink__cup--selected');
    ordered = true
  }
})

