import "./ResultBar.css";
import  MySvg from "../assets/icon-visual.svg";

function ResultBar(props) {
  return (
    <div className={`bar ${props.color}`}>
      <div className="category flex gap-1">
        <img src={props.img} alt="svg icon"/>
        <span>{props.category}</span>
      </div>
      <div className="score flex gap-05">
        <p>{props.score}</p>
        <p>/100</p>
      </div>
      <img src={MySvg} alt="" />
      
    </div>
  );
}

export default ResultBar;
