import './App.css';
import Aboutus from './components/Aboutus';
import Admin from './components/Adminhome';
import Home from './components/Home';
import Loginuser from './components/Loginuser';
import Loginworker from './components/Loginworker';
import Signin from './components/Signin';
import Userhistory from './components/Userhistory';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Loginuser/>}/>
                <Route path="/adminlogin" element={<Signin/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/adminregister" element={<Loginworker/>}/>
                <Route path="/userrecord" element={<Userhistory/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/aboutus" element={<Aboutus/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
