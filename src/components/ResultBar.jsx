import "./ResultBar.css"

function ResultBar(props) {
  

  return (
    <div className={`bar ${props.color}`}>
      <div className="category flex gap-1">
        {/* <object src={props.img} alt="svg icon" /> */}
        <object data={props.img} type="image/svg+xml"></object>
        <span>{props.category}</span>
      </div>
      <div className="score flex gap-05">
        <p>{props.score}</p>
        <p>/100</p></div>
    </div>
  );
}

export default ResultBar;
