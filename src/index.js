import { render } from "react-dom";
import Effect from "./Effect";
import Context from "./context/Context";
import Reducer from "./Reducer";
import LayoutEffect from "./LayoutEffect";
import OldContext from "./context/OldContext";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Effect />
      {/* <OldContext /> */}
      {/* <Reducer /> */}
      {/* <LayoutEffect /> */}
    </div>
  );
}

render(<App />, document.getElementById("root"));
