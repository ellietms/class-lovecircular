// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Basket from "./Basket";

function Header(props){
  return (
    <div className='headerContainer'>
        <h4 class="header">Welcome to shopping App</h4>
        <Basket orders={props.orders} setBasketItem={props.setBasketItem} />
    </div>
   
  )
}

export default Header;