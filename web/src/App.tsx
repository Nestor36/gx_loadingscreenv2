import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AlertDialog from "./ui/alertDialog";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor available={false} />
      <AlertDialog header="Warning" content="this is a new production" />
    </>
  );
}

export default App;
