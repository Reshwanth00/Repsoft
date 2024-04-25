import classes from './App.module.css';
import { useState } from 'react';
import Header from './Header';
import Login from './Login';
import Register from './Register';

function App() {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const HandleChange = () => {
    setLogin(!login);
    setRegister(!register);
  }
  return (
    <div className={classes.mainContainer}>
      <Header />
      <div className={classes.bodyOuterContainer}>
        <div className={classes.bodyContainer}>
          {login &&
            <Login onPress={HandleChange} />
          }
          {register &&
            <Register onPress={HandleChange} />
          }
        </div>
      </div>

    </div>
  )
}

export default App;
