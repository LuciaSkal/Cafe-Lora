
import './style.css';
import {Layer} from './Layer'

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

const layerElm = document.querySelector('.drink__info')

const items = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0"',
    label: 'teplé mléko',
  },
  {
    color: '#613916"',
    label: 'espresso',
  }
]


for (let i=0; i < items.length; i++ ) {
  layerElm.innerHTML += Layer(items[i])
}





/*-------------------------------------*/
     /*<div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #feeeca"
                  ></div>
                  <div class="layer__label">mléčná pěna</div>
                </div>*/