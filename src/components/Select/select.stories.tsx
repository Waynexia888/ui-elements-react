import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// import Select from './select'
// import Option from './option'
import Select from "./index";
const defaultSelect = () => (
  <Select
    placeholder="Select"
    onChange={action("changed")}
    onVisibleChange={action("visible")}
  >
    <Select.Option value="hello" />
    <Select.Option value="hello2" />
    <Select.Option value="hello3" />
    <Select.Option value="disabled" disabled />
    <Select.Option value="hello5" />
  </Select>
);
const multipleSelect = () => (
  <Select
    placeholder="Multiple selection, selecting from existing items."
    onChange={action("changed")}
    onVisibleChange={action("visible")}
    multiple
  >
    <Select.Option value="hello" />
    <Select.Option value="hello2" />
    <Select.Option value="hello3" />
    <Select.Option value="App Academy" />
    <Select.Option value="App Academy2" />
  </Select>
);

const disabledSelect = () => (
  <Select placeholder="Disabled" disabled>
    <Select.Option value="hello" />
    <Select.Option value="hello2" />
    <Select.Option value="hello3" />
  </Select>
);

storiesOf("Select Component", module)
  .add("Select", defaultSelect)
  .add("Multiple selection", multipleSelect)
  .add("Disabled Select", disabledSelect);
