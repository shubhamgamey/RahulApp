import "./App.css";

import Navbar from "./Component/Navbar";
import photo from "./Assets/Rahul.jpg";

function App() {
  return (
    <>
      <Navbar title="Rahul Game !" aboutme="LinkedIn" />

      <img src={photo} class="img-thumbnail rounded-circle border-0.1" width="100px" alt="..." />
    </>
  );
}

export default App;
