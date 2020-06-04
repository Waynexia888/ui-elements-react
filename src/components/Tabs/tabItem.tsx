import React, { FC } from "react";

export interface TabItemProps {
  /** Plain text in tabs */
  label: string | React.ReactElement;
  /** Whether disabled tab */
  disabled?: boolean;
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="viking-tab-panel">{children}</div>;
};

export default TabItem;
