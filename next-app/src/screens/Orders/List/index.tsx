import { GridValueGetterParams } from "@material-ui/data-grid";
import Flex from "src/components/common/Flex";
import DataTable from "src/components/common/Table";
import useSelector from "src/hooks/useSelector";
import moment from "moment";

const ListOrdersPage = (props) => {
  const ordersData = useSelector((state) => state.orders);

  return (
    <Flex width={"100%"} height={"100%"}>
      <DataTable
        rows={ordersData.orders || []}
        columns={[
          {
            field: "name",
            headerName: "Name",
            width: 250,
            editable: false,
            valueGetter: (params: GridValueGetterParams) =>
              params.getValue(params.id, "name"),
          },
          {
            field: "createdAt",
            headerName: "Created at",
            width: 200,
            editable: false,
            valueGetter: (params: GridValueGetterParams) => {
              const date: any = params.getValue(params.id, "createdAt");
              return moment(date, "HH:mm DD/MM/YYYY");
            },
          },
          {
            field: "updatedAt",
            headerName: "Updated at",
            width: 200,
            editable: false,
            valueGetter: (params: GridValueGetterParams) => {
              const date: any = params.getValue(params.id, "createdAt");
              return moment(date, "HH:mm DD/MM/YYYY");
            },
          },
        ]}
      />
    </Flex>
  );
};

export default ListOrdersPage;
