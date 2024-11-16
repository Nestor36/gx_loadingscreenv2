import "./App.css";
import AlertDialog from "./ui/alertDialog";
import Cursor from "./components/Cursor";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Cursor available={false} />
      <AlertDialog
        header="Información"
        content="this is a new production"
        cancel={false}
        label={{ confirm: "Confirmar", cancel: "Cancelar" }}
      />
      <Input
        title="ADD ITEM"
        description="this is a description"
        placeholder="burger"
        name="data_addItem"
        style={{ width: "200px" }}
      />
    </>
  );
}

export default App;
