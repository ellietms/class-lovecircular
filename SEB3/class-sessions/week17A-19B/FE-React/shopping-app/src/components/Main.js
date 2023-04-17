import "../App.css";
import Button from "./Button";

function Main({fruits}) {
    function handleClickMe(event){
        console.log("You clicked Me!")
        console.log("event :" , event)
       
    }
    return (
      <div>
     {fruits.map((fruitData,index) =>(
      <div key={index} className="container">
      <img
        className="main"
        src={fruitData.link}
      />
      <div className="info"> 
        <p>Description : {fruitData.des}</p>
        <button>add</button>
      </div>
      <Button handleClickMe = {(event) => handleClickMe(event)}/>
      </div>)
     )}
     </div>
    )
}

export default Main;
