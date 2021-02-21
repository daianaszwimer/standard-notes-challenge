import "./App.css";
import Header from "./modules/common/components/Header";

const HEADER_TEXT = "An all-in-one personal knowledge base";
function App() {
  return (
    <div className="app">
      <Header text={HEADER_TEXT}/>
    </div>
  );
}

export default App;
