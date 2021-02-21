import "./App.css";
import Title from "./modules/common/components/Title";
import Subtitle from "./modules/common/components/Subtitle";
import Link from "./modules/common/components/Link";

const TITLE_TEXT = "An all-in-one personal knowledge base";
const SUBTITLE_TEXT = "Write simple notes, or complex ones. From tasks and todos, to spreadsheets, markdown, and rich text, you can store all types of information quickly and securely in Standard Notes.";
const LINK_TEXT = "Explore our features";

const App = () => (
  <div className="wrapper">
    <Title text={TITLE_TEXT}/>
    <div className="subtitle-wrapper">
      <Subtitle text={SUBTITLE_TEXT}/>
    </div>
    <Link text={LINK_TEXT} url="#" shouldShowIcon/>
  </div>
);

export default App;
