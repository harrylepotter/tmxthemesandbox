import Button from "@material-ui/core/Button";
import React from "react";
import ReactDOM from "react-dom";
import theme from "./muiGlobalTheme";
import { ThemeProvider } from "@material-ui/styles";
import * as SimpleTabs from "./SimpleTabs";
import AGTable from "./AGTable.js";
import "./styles.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div class="buttons">
        <p>Buttons:</p>
        <Button disableRipple="true">Button</Button>
        <Button disabled>disabled button</Button>
      </div>
      <div class="tabs">
        <p>Tabs:</p>
        {SimpleTabs.default()}
      </div>
      <div class="tables">
        <p>Tables:</p>
        <AGTable/>        
      </div>
    
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
