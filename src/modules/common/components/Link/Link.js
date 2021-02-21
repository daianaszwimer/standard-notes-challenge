import "./Link.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";

const Link = ({ text, url, shouldShowIcon }) => (
  <a className="link" href={url}>
    {text}
    {shouldShowIcon ?
      <div className="link-icon-wrapper">
        <ArrowIcon className="link-icon" title="arrow"/>
      </div>
      : null
    }
  </a>
);

export default Link;