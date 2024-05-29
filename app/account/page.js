import Table from "@/components/Table";
import { accountTableCol } from "@/utils/tableColumns";

export default function Account() {
  return (
    <div>
      <Table path={"accountStatements"} tableColumns={accountTableCol} />
    </div>
  );
}
