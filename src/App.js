import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  // const [myStyle, setMyStyle] = useState({
  //   color: '#000000',
  //   backgroundColor: '#ffffff'
  // });
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");

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
      // if(myStyle.color === '#000000'){
      //     setMyStyle({
      //         color: '#ffffff',
      //         backgroundColor: '#333333'
      //     });
      //     setBtnText("Enable Light Mode");
      // }
      // else{
      //     setMyStyle({
      //         color: '#000000',
      //         backgroundColor: '#ffffff'
      //     });
      //     setBtnText("Enable Dark Mode");
      // }
  }

  return (
    <div>
      <Navbar title="TextUtils" toggle={toggleMode} btnText={btnText} />
      <div className="container my-3">
        <TextForm mode={mode} />
      </div>
    </div>
    );
}


export default App;
