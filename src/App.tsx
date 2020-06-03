import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 2</MenuItem>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
        <Button className="custom"> Hello </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          {" "}
          Large Primary{" "}
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          {" "}
          Small Danger{" "}
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="http://www.google.com"
          target="_blank"
        >
          {" "}
          Google Link{" "}
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.google.com" disabled>
          {" "}
          Disabled Link{" "}
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
