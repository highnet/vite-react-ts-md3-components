import React, { useState } from "react";
import { ISwitchProps } from "./ISwitchProps";

const Switch: React.FC<ISwitchProps> = ({ disabled, children, id, className, selected, onChange }) => {

  const [_disabled] = useState(disabled || false);
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");

  const [_selected, setSelected] = useState(selected || false);

  const click = () => {
  }

  const handleClick = () => {
    setSelected(!_selected);
  }


  return (
    <div
      onClick={(e) => {
        onChange?.(e);
        handleClick();
        click();
      }}
      id={_id}
      className={"switch" + " " + "switch-" + (_selected ? "selected" : "deselected") + " " + "switch-" + (_disabled ? "disabled" : "enabled") + " " + _className}>
      <div className={"switch-track switch-track-" + (_selected ? "selected" : "deselected") + " " + "switch-track-" + (_disabled ? "disabled" : "enabled")}>
        <div className={"switch-handle switch-handle-" + (_selected ? "selected" : "deselected") + " " + "switch-handle-" + (_disabled ? "disabled" : "enabled")}            >
          <div className={"switch-handle-overlay"}>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Switch;
