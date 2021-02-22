import { useState } from "react";
import "./IconCard.css";
import Icon from "../Icon";
import { DEFAULT_STATE, COLORED_STATE } from "../Icon/constants";

const IconCard = ({ text, id, hoverIconColor }) => {
  const [ isHovering, setIsHovering ] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovering(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="icon-card-wrapper"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Icon
        id={id}
        state={isHovering ? COLORED_STATE : DEFAULT_STATE}
        backgroundColor={hoverIconColor}
      />
      <span
        className="icon-card-text"
      >
        {text}
      </span>
    </div>
  );
};

export default IconCard;