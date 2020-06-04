import React, { FC, useContext } from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { SelectContext } from "./select";
export interface SelectOptionProps {
  index?: string;
  /** The value cannot be the same*/
  value: string;
  /** Default value if not set*/
  label?: string;
  /** Whether disabled select*/
  disabled?: boolean;
}

export const Option: FC<SelectOptionProps> = ({
  value,
  label,
  disabled,
  children,
  index,
}) => {
  const { onSelect, selectedValues, multiple } = useContext(SelectContext);
  const isSelected = selectedValues.includes(value);
  const classes = classNames("viking-select-item", {
    "is-disabled": disabled,
    "is-selected": isSelected,
  });
  const handleClick = (
    e: React.MouseEvent,
    value: string,
    isSelected: boolean
  ) => {
    e.preventDefault();
    if (onSelect && !disabled) {
      onSelect(value, isSelected);
    }
  };
  return (
    <li
      key={index}
      className={classes}
      onClick={(e) => {
        handleClick(e, value, isSelected);
      }}
    >
      {children || (label ? label : value)}
      {multiple && isSelected && <Icon icon="check" />}
    </li>
  );
};

Option.displayName = "Option";

export default Option;
