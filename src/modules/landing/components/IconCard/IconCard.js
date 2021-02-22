import { useState } from "react";
import "./IconCard.css";
import Icon from "../Icon";
import { DEFAULT, COLORED } from "../Icon/states";

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
        state={isHovering ? COLORED : DEFAULT}
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