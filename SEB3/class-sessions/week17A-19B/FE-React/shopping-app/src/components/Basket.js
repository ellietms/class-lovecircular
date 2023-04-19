import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import "../App.css"

function Basket(props){
    function handleBasketItem(){
     props.setBasketItem(0)
    }
 


    return(
        <div className='basket-btn' >
            <button onClick={handleBasketItem}>
              <FontAwesomeIcon icon={faCoffee} />
            </button>

            <span id="order">{props.orders}</span>
             
        </div>
        
    )
}


export default Basket;