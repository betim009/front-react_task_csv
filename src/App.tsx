import MyModal from "./components/my-modal";
import MyTable from "./components/my-table";
import { useCsv } from "./hooks/useCsv";

export default function App() {
  const { dataCSV } = useCsv();

  return (
    <>
      <MyModal />
      <h2>Dados do CSV:</h2>
      <MyTable />
    </>
  );
}
