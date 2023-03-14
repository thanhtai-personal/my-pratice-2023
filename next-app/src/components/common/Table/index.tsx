import { DataGrid, GridColDef } from "@material-ui/data-grid";

interface TableProps {
  rows: Array<any>;
  columns: GridColDef[];
  pageSize?: number;
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
}

export default function DataTable(props: TableProps) {
  const {
    rows,
    columns,
    checkboxSelection,
    disableSelectionOnClick,
    pageSize = 5,
  } = props;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick={disableSelectionOnClick}
      />
    </div>
  );
}
