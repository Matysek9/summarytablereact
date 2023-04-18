import "./Result.css";

function Result(props) {
  return (
    <div className="background">
        <h2>Your Result</h2>
      <div className="circleScore">
        <p>{props.resultScore}</p>
        <p>of 100</p>
      </div>
      <main>
        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who habe taken these tests.
        </p>
      </main>
    </div>
  );
}

export default Result;
