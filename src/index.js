import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import theme from "./muiGlobalTheme";
import { ThemeProvider } from "@material-ui/styles";
import * as SimpleTabs from "./SimpleTabs";
import TMXPrimaryTabs from './TMXPrimaryTabs';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AGTable from "./AGTable.js";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div class="buttons">
        <p>Buttons:</p>
        <Button disableRipple="true">Button</Button>
        <Button disabled>disabled button</Button>
      </div>
      <div class="tabs-primary">
        <p>Primary tabs:</p>
          <AppBar
          position={"static"}
          elevation={0}
          style={{ backgroundColor: "#FAFBFC" }}
        >
          <Toolbar style={{borderBottom: 'solid 1px rgb(180,180,180)'}}>
            <TMXPrimaryTabs
              style={{ alignSelf: "flex-end" }}
              tabs={[
                { label: "Label 1" },
                { label: "Label 2" },
                { label: "Label 3" },
                { label: "Label 4" }
              ]}
              tabStyle={{
                bgColor: "#E6E8EB",
                selectedBgColor: "#ffffff",
                color: "rgba(0,0,0,0.87)"
              }}
              tabProps={{
                disableRipple: true
              }}
              value={index}
              onChange={(e, i) => setIndex(i)}
            />
          </Toolbar>
        </AppBar>
      </div>
      <div class="tabs-secondary">
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
