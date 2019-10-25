import { AgGridReact } from "ag-grid-react";
import React from "react";

// import "ag-grid-community/src/styles/ag-grid.scss";
// import "ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";

import "./tmx-ag-grid.scss";

// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-balham.css";

class AGTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "33vh",
          width: "100%"
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default AGTable;
