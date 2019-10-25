import Button from "@material-ui/core/Button";
import React from "react";
import ReactDOM from "react-dom";
import theme from "./muiGlobalTheme";
import { ThemeProvider } from "@material-ui/styles";
import * as SimpleTabs from "./SimpleTabs";
import AGTable from "./AGTable.js";
import "./styles.scss";

window.alert("oi hello");
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <Button disableRipple="true">Button</Button>
        <Button disabled>disabled button</Button>
        {SimpleTabs.default()} */}
      </div>
      <AGTable />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
