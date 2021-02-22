import "./App.css";
import Title from "./modules/common/components/Title";
import Subtitle from "./modules/common/components/Subtitle";
import Link from "./modules/common/components/Link";
import IconCardSlideshow from "./modules/landing/components/IconCardSlideshow";
import {
  TITLE_TEXT,
  SUBTITLE_TEXT,
  LINK_TEXT,
  CARDS
} from "./modules/landing/constants";

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
      <IconCardSlideshow cards={CARDS}/>
    </div>
  </header>
);

export default App;
