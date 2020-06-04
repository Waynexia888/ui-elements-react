import React, { FC } from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface IconProps extends FontAwesomeIconProps {
  /** Different Types of theme */
  theme?: ThemeProps;
}

/**
 * Semantic vector graphics based on react-fontawesome。
 *
 * You can search all the properties of react-fontawesome by visiting https://github.com/FortAwesome/react-fontawesome#basic
 *
 * You can use all free-solid-icons in fontawesome，by visiting https://fontawesome.com/icons?d=gallery&s=solid&m=free
 * ### How To Use
 *
 * ~~~js
 * import { Icon } from 'vikingship'
 * ~~~
 */
export const Icon: FC<IconProps> = (props) => {
  // icon-primary
  const { className, theme, ...restProps } = props;
  const classes = classNames("viking-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
