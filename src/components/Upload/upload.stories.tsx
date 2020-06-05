import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Upload } from "./upload";
import Button from "../Button/button";
import Icon from "../Icon/icon";

const simpleUpload = () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    onChange={action("changed")}
    onSuccess={action("success")}
    onProgress={action("progress")}
    onRemove={action("removed")}
  >
    <Button size="lg" btnType="primary">
      <Icon icon="upload" /> Click to Upload{" "}
    </Button>
  </Upload>
);

const checkUpload = () => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert("file too big");
      return false;
    }
    return true;
  };
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      beforeUpload={checkFileSize}
    >
      <Button size="lg" btnType="primary">
        <Icon icon="upload" /> less than 50Kb！{" "}
      </Button>
    </Upload>
  );
};

const textCheck = `
### Story Source
~~~javascript
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big')
    return false;
  }
  return true;
}
return (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    onChange={action('changed')}
    beforeUpload={checkFileSize}
  >
    <Button size="lg" btnType="primary"><Icon icon="upload" /> less than 50Kb！ </Button>
  </Upload>  
)
~~~
`;



const dragUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="fileName"
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  );
};

storiesOf("Upload", module)
.add("Upload", simpleUpload)
.add('Check upload size', checkUpload, {info: {source: false, text: textCheck}})
  .add('Drag to upload', dragUpload)
