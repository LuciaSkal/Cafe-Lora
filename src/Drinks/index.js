import './style.css';
import {Layer} from '../Layer/index.js'



export const Drink = (props) => {
  

  const drinkElm = document.createElement('div')
  drinkElm.classList.add('drink')
  drinkElm.innerHTML = `
            <div class="drink__product">
              <div class="drink__cup">
                <img src="../assets/cups/${props.id}.png" />
              </div>
              
              <div class="drink__info">
                  <h3>${props.name}</h3>

              </div>

                  
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
    
  `
 const layerElm = drinkElm.querySelector('.drink__info')

  for (let i=0; i < props.layers.length; i++ ) {
   layerElm.innerHTML += Layer(props.layers[i])
   }




const orderBtnElm = drinkElm.querySelector('.order-btn');
orderBtnElm.addEventListener('click', () => {
  if (props.ordered === true) {
  orderBtnElm.textContent = 'Zrušit';
  drinkElm.querySelector('.drink__cup').classList.add('drink__cup--selected');
  props.ordered = false
  } else {
    orderBtnElm.textContent = 'Objednat';
    drinkElm.querySelector('.drink__cup').classList.remove('drink__cup--selected');
    props.ordered = true
  }
})   

  return drinkElm
}
