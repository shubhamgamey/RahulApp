import "./App.css";

import Navbar from "./Component/Navbar";
import photo from "./Assets/Rahul.jpg";

function App() {
  return (
    <>
      <Navbar title="Rahul Game !" aboutme="LinkedIn" />

      <img src={photo} class="img-thumbnail" alt="..." />
    </>
  );
}

export default App;
