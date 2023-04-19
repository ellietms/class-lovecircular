import "../App.css";
import Button from "./Button";

function Main({fruits , handleClickMe}) {
    
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
        <Button handleClickMe = {handleClickMe}/>
      </div>
      
      </div>)
     )}
     </div>
    )
}

export default Main;
