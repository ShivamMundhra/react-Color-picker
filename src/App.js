import React from "react";
import Palette from "./components/Palette/Palette";
import seedColors from "./utils/seedColors";
import { generatePalette } from "./utils/colorHelpers";

function App() {
  // console.log(generatePalette(seedColors[2]));
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
