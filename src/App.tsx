// import React, { useState } from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import Menu from "./components/Menu/menu";
// import MenuItem from "./components/Menu/menuItem";
// import SubMenu from "./components/Menu/subMenu";
// import Transition from "./components/Transition/transition";
// import Button from "./components/Button/button";
// library.add(fas);
// const App: React.FC = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Menu
//           defaultIndex="0"
//           onSelect={(index) => {
//             alert(index);
//           }}
//         >
//           <MenuItem>cool link</MenuItem>
//           <MenuItem disabled>cool link 2</MenuItem>
//           <SubMenu title="dropdown">
//             <MenuItem>dropdown 1</MenuItem>
//             <MenuItem>dropdown 2</MenuItem>
//           </SubMenu>
//           <MenuItem>cool link 3</MenuItem>
//         </Menu>
//         <Button
//           size="lg"
//           onClick={() => {
//             setShow(!show);
//           }}
//         >
//           {" "}
//           Toggle{" "}
//         </Button>
//         <Transition in={show} timeout={300} animation="zoom-in-left">
//           <div>
//             <p>
//               Edit <code>src/App.tsx</code> and save to reload.
//             </p>
//             <p>
//               Edit <code>src/App.tsx</code> and save to reload.
//             </p>
//             <p>
//               Edit <code>src/App.tsx</code> and save to reload.
//             </p>
//             <p>
//               Edit <code>src/App.tsx</code> and save to reload.
//             </p>
//             <p>
//               Edit <code>src/App.tsx</code> and save to reload.
//             </p>
//           </div>
//         </Transition>
//         <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
//           <Button btnType="primary" size="lg">
//             A Large Button{" "}
//           </Button>
//         </Transition>
//       </header>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
const App: React.FC = () => {
  const [title, setTitle] = useState("");
  const postData = {
    title: "my title",
    body: "hello man",
  };
  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((resp) => {
        console.log(resp);
        setTitle(resp.data.title);
      });
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
      </header>
    </div>
  );
};

export default App;

