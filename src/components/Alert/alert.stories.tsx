import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Alert from "./alert";

const defaultAlert = () => {
  return <Alert title="this is alert!"></Alert>;
};

const stylesAlert = () => {
  return (
    <>
      <Alert title="this is Success" type="success"></Alert>
      <Alert title="this is Danger!" type="danger"></Alert>
      <Alert title="this is Warning!" type="warning" closable={false}></Alert>
    </>
  );
};
const descAlert = () => {
  return (
    <Alert
      title="Info Text"
      description="this is a long description"
      onClose={action("closed")}
    ></Alert>
  );
};
storiesOf("Alert Component", module)
  .add("Alert", defaultAlert)
  .add("Types of Alert", stylesAlert)
  .add("Additional description for alert message", descAlert);
