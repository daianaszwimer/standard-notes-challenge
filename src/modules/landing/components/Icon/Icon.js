import { useEffect, useState } from "react";
import "./Icon.css";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_COLOR,
  COLOR,
  DEFAULT_STATE,
  COLORED_STATE
} from "./constants";
import { ReactComponent as TaskIcon } from "../../assets/tasks.svg";
import { ReactComponent as CodeIcon } from "../../assets/code.svg";
import { ReactComponent as MarkdownIcon } from "../../assets/markdown.svg";
import { ReactComponent as PasswordsIcon } from "../../assets/passwords.svg";
import { ReactComponent as PlainTextIcon } from "../../assets/plain-text.svg";
import { ReactComponent as RichTextIcon } from "../../assets/rich-text.svg";
import { ReactComponent as SpreadsheetIcon } from "../../assets/spreadsheet.svg";

const ICONS = {
  tasks: TaskIcon,
  code: CodeIcon,
  markdown: MarkdownIcon,
  passwords: PasswordsIcon,
  "plain-text": PlainTextIcon,
  "rich-text": RichTextIcon,
  spreadsheet: SpreadsheetIcon,
};

const Icon = ({ id, state, backgroundColor }) => {
  const [ states, setStates ] = useState({
    [DEFAULT_STATE]: {
      backgroundColor: DEFAULT_BACKGROUND_COLOR,
      fillColor: DEFAULT_COLOR
    },
    [COLORED_STATE]: {
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
    const CLASS_NAMES = {
      COLORED: "icon",
      DEFAULT: null
    };
    const MyIcon = ICONS[id];
    return <MyIcon
      fill={states[state].fillColor}
      className={CLASS_NAMES[state]}
    />;
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
