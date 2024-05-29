import './App.css';
import Admin from './components/Adminhome';
import Home from './components/Home';
import Loginuser from './components/Loginuser';
import Loginworker from './components/Loginworker';
import Userhistory from './components/Userhistory';

function App() {
  return (
    <div className="App">
      {/* <Loginuser/> */}
      {/* <Loginworker/> */}
      {/* <Home/> */}
      {/* <Admin /> */}
      <Userhistory/>
    </div>
  );
}

export default App;
