import React from "react";
import { Route, Switch } from "react-router-dom";

import Palette from "./components/Palette/Palette";
import PaletteList from "./components/PaletteList/PaletteList";

import seedColors from "./utils/seedColors";
import { generatePalette } from "./utils/colorHelpers";

function App() {
  // console.log(generatePalette(seedColors[2]));
  const findPalette = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
