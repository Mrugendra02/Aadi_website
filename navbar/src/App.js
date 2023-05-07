import './App.css';
import Festival from './Components/Festival';
import Location from './Components/Location';
import Main from './Components/Menu';

import Navbar from './Components/Navbar';
import Program from './Components/Program';
import Trailer from './Components/Trailer';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
<Navbar/>
<Main/>
<Trailer/>
<Program/>
<Location/>








    </div>
  );
}

export default App;
