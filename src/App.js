
import './App.css';
import Navbar from "./components/Navbar";
import Textform from "../src/components/Textform";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Navbar title ="textutils" aboutText="About US" /> */}
      {/* <Navbar/> */}

      <Navbar title="Text-Editor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="TextEditor - word counter, text to uppercase, to lowercase" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;