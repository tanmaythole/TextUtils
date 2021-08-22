import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode==='light') {
      setMode("dark");
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = '#ffffff';
      setBtnText("Enable Dark Mode");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      setBtnText("Enable Light Mode");
    }
  }

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" toggle={toggleMode} btnText={btnText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    );
}


export default App;
