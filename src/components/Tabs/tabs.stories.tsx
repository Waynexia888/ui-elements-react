import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tabs from "./tabs";
import TabItem from "./tabItem";
import Icon from "../Icon";
const defaultTabs = () => (
  <Tabs onSelect={action("selected")}>
    <TabItem label="Tab 1">this is content one</TabItem>
    <TabItem label="Tab 2">this is content two</TabItem>
    <TabItem label="Tab 3">this is content three</TabItem>
  </Tabs>
);

const cardTabs = () => (
  <Tabs onSelect={action("selected")} type="card">
    <TabItem label="card1">this is card one</TabItem>
    <TabItem label="card2">this is content two</TabItem>
    <TabItem label="disabled" disabled>
      this is content three
    </TabItem>
  </Tabs>
);

const customTabs = () => (
  <Tabs onSelect={action("selected")} type="card">
    <TabItem
      label={
        <>
          <Icon icon="check-circle" /> Customize Icon
        </>
      }
    >
      this is card one
    </TabItem>
    <TabItem label="tab2">this is content two</TabItem>
  </Tabs>
);
storiesOf("Tabs", module)
  .add("Tabs", defaultTabs)
  .add("Basic style of tabs", cardTabs)
  .add("Customize style of tabs", customTabs);
