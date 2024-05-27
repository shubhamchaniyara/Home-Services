import './App.css';
import Admin from './components/Adminhome';
import Home from './components/Home';
import Loginuser from './components/Loginuser';
import Loginworker from './components/Loginworker';

function App() {
  return (
    <div className="App">
      {/* <Loginuser/> */}
      {/* <Loginworker/> */}
      {/* <Home/> */}
      <Admin />
    </div>
  );
}

export default App;
