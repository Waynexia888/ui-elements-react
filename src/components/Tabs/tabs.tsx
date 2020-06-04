import React, { FC, useState, FunctionComponentElement } from "react";
import classNames from "classnames";
import { TabItemProps } from "./tabItem";
export interface TabsProps {
  /**Initial index, which is 0 */
  defaultIndex?: number;
  /**className */
  className?: string;
  /**Called when a tab item is selected */
  onSelect?: (selectedIndex: number) => void;
  /**Basic style of tabs, line or card */
  type?: "line" | "card";
}

/**
 * 
 * Tabs make it easy to switch between different views.
 * ### How To Use
 *
 * ~~~js
 * import { Tabs } from 'vikingship'
 * ~~~
 */
export const Tabs: FC<TabsProps> = (props) => {
  const { defaultIndex, className, onSelect, children, type } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const handleClick = (
    e: React.MouseEvent,
    index: number,
    disabled: boolean | undefined
  ) => {
    if (!disabled) {
      setActiveIndex(index);
      if (onSelect) {
        onSelect(index);
      }
    }
  };
  const navClass = classNames("viking-tabs-nav", {
    "nav-line": type === "line",
    "nav-card": type === "card",
  });
  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;
      const classes = classNames("viking-tabs-nav-item", {
        "is-active": activeIndex === index,
        disabled: disabled,
      });
      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={(e) => {
            handleClick(e, index, disabled);
          }}
        >
          {label}
        </li>
      );
    });
  };
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child;
      }
    });
  };
  return (
    <div className={`viking-tabs ${className}`}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className="viking-tabs-content">{renderContent()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: "line",
};
export default Tabs;
