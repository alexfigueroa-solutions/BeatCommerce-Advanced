
import './App.scss';
import { nav_dict_array } from './components/nav/nav_data';
import Navbar from './components/nav/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <Navbar nav_dict_array = {nav_dict_array}></Navbar>
      
       
      </header>
    </div>
  );
}

export default App;
