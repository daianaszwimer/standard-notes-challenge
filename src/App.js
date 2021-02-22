import "./App.css";
import Title from "./modules/common/components/Title";
import Subtitle from "./modules/common/components/Subtitle";
import Link from "./modules/common/components/Link";
import IconCardSlideshow from "./modules/landing/components/IconCardSlideshow";

const TITLE_TEXT = "An all-in-one personal knowledge base";
const SUBTITLE_TEXT = "Write simple notes, or complex ones. From tasks and todos, to spreadsheets, markdown, and rich text, you can store all types of information quickly and securely in Standard Notes.";
const LINK_TEXT = "Explore our features";
const CARDS = [
  {
    id: "markdown",
    text: "Markdown",
    hoverIconColor: "#54457F"
  },
  {
    id: "rich-text",
    text: "Rich text",
    hoverIconColor: "#DB2763"
  },
  {
    id: "spreadsheet",
    text: "Spreadsheet",
    hoverIconColor: "#1AA772"
  },
  {
    id: "tasks",
    text: "Tasks and todos",
    hoverIconColor: "#06BEE1"
  },
  {
    id: "code",
    text: "Code snippets",
    hoverIconColor: "#D64045"
  },
  {
    id: "passwords",
    text: "Passwords",
    hoverIconColor: "#FEB95F"
  },
  {
    id: "plain-text",
    text: "Plain text",
    hoverIconColor: "#735CDD"
  }
];
const App = () => (
  <header className="wrapper">
    <>
      <Title text={TITLE_TEXT}/>
      <div className="subtitle-wrapper">
        <Subtitle text={SUBTITLE_TEXT}/>
      </div>
      <Link
        text={LINK_TEXT}
        url="#"
        shouldShowIcon
      />
    </>
    <div className="slideshow-wrapper">
      {/* we send the same array with items duplicated because otherwise in some resolutions there is a space that looks weird*/}
      <IconCardSlideshow cards={CARDS.concat(CARDS)}/>
    </div>
  </header>
);

export default App;
