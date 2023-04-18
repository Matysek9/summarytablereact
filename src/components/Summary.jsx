import "./Summary.css"
import jsonData from "../assets/data.json"
import ResultBar from "./ResultBar";
import Button from "./Button";




function Summary(){

  
 return <div className="summary">
    <h4>Summary</h4>
    <div className={"barContainer"}>
      {jsonData.map(el => <ResultBar key={el.category} img={el.icon} category={el.category} score={el.score} color={el.color} />)}
    </div>
    <Button btnText={"Continue"}/>
    
 </div>
}

export default Summary;