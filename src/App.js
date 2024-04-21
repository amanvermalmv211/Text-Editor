import './App.css';
import Navbar from './Navbar';
import Alert from './Alert';
import TextForm from './TextForm';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.background = '#042743';
      showAlert("Dark Mode has been enabled.", "Success", "bg-green-200")
    }
    else {
      setMode("light");
      document.body.style.background = '#fafae4';
      showAlert("Light Mode has been enabled.", "Success", "bg-yellow-200")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, myColor) => {
    setAlert({
      msg: message,
      type: type,
      setColor: myColor
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className='h-16'>
    <Alert alert={alert}/>
    </div>
    <TextForm mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;