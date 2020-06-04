import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

export const defaultMenu = () => (
  <Menu defaultIndex="0" onSelect={action("selected!")}>
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title="Sub Menu">
      <MenuItem>Sub Menu 1</MenuItem>
      <MenuItem>Sub Menu 2</MenuItem>
    </SubMenu>
  </Menu>
);
export const clickMenu = () => (
  <Menu defaultIndex="0" onSelect={action("selected!")} mode="vertical">
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <SubMenu title="Navigation 1">
      <MenuItem>Sub Menu 1</MenuItem>
      <MenuItem>Sub Menu 2</MenuItem>
    </SubMenu>
  </Menu>
);
export const openedMenu = () => (
         <Menu
           defaultIndex="0"
           onSelect={action("selected!")}
           mode="vertical"
           defaultOpenSubMenus={["2"]}
         >
           <MenuItem>cool link</MenuItem>
           <MenuItem>cool link 2</MenuItem>
           <SubMenu title="Inline menu could be collapsed">
             <MenuItem>Sub Menu 1</MenuItem>
             <MenuItem>Sub Menu 2</MenuItem>
           </SubMenu>
         </Menu>
       );

storiesOf("Menu Component", module)
  .add("Menu", defaultMenu)
  .add("Vertical menu with inline submenus.", clickMenu)
  .add("Collapsed inline menu", openedMenu);
