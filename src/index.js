
import './style.css';
import {Drink} from './Drinks/index.js'


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



const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const drinkListElm = document.querySelector('.drinks-list')

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
.then((response) => response.json())
.then((data) => {
  data.forEach((items) => {
    drinkListElm.appendChild(Drink(items))
  })
})

