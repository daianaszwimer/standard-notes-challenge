import "./App.css";
import Title from "./modules/common/components/Title";

const TITLE_TEXT = "An all-in-one personal knowledge base";

const App = () => (
  <div className="wrapper">
    <Title text={TITLE_TEXT}/>
  </div>
);

export default App;
