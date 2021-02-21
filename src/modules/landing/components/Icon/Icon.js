import { useEffect, useState } from "react";
import "./Icon.css";
import { ReactComponent as TaskIcon } from "../../assets/tasks.svg";
import { DEFAULT, COLORED } from "./states";

const ICONS = {
  tasks: TaskIcon
};
const DEFAULT_COLOR = "#63666B";
const COLOR = "#fff";
const DEFAULT_BACKGROUND_COLOR = "#fff";

const Icon = ({ id, state, backgroundColor }) => {
  const [ states, setStates ] = useState({
    [DEFAULT]: {
      backgroundColor: DEFAULT_BACKGROUND_COLOR,
      fillColor: DEFAULT_COLOR
    },
    [COLORED]: {
      fillColor: COLOR
    }
  });

  const handleBackgroundColorChange = () => {
    setStates(prevState => ({
      ...prevState,
      colored: {
        ...prevState.colored,
        backgroundColor
      }
    }));
  };
  useEffect(handleBackgroundColorChange, [ backgroundColor ]);

  const renderIcon = () => {
    const MyIcon = ICONS[id];
    return <MyIcon fill={states[state].fillColor}/>;
  };

  return (
    <div className="icon-wrapper" style={{
      backgroundColor: states[state].backgroundColor
    }}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
