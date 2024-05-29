import Table from "@/components/Table";
import { stockedAccountTableCol } from "@/utils/tableColumns";

export default function StockedAccount() {
  return (
    <div>
      <Table
        path={"stockedAccountStatements"}
        tableColumns={stockedAccountTableCol}
      />
    </div>
  );
}
