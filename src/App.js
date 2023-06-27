import { useState } from "react";
import "./App.css";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`);

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "Dark Mode enabled";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "Light Mode enabled";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Analyzer"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter Text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
