//import {useState} from "react";
import Routess from './routes';
import { AuthProvider } from './context/authContext';
import history from './history';
function App() {

  return (

    <AuthProvider>
      <div history={history} className="App">
        <Routess />
      </div>
    </AuthProvider>
  );
}

export default App;