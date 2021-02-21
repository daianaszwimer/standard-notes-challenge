import "./App.css";
import Title from "./modules/common/components/Title";

const HEADER_TEXT = "An all-in-one personal knowledge base";

const App = () => (
  <div className="wrapper">
    <Title text={HEADER_TEXT}/>
  </div>
);

export default App;
