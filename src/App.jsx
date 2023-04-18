import jsonData from "./assets/data.json"
import Result from "./components/Result";

import "./App.css"
import Summary from "./components/Summary";

function App() {
  
  return <div className="App">
   <div className="card">
    <Result resultScore={76}/>
    <Summary/>
   </div>
  </div>;
}

export default App;
