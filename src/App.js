import './App.css';
import Aboutus from './components/Aboutus';
import Admin from './components/Adminhome';
import Home from './components/Home';
import Loginuser from './components/Loginuser';
import Loginworker from './components/Loginworker';
import Navigation from './components/Navigation';
import Signin from './components/Signin';
import Userhistory from './components/Userhistory';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/loginworker" element={<Loginworker/>}/>
                <Route path="/loginuser" element={<Loginuser/>}/>
                <Route path="/userhistory" element={<Userhistory/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/aboutus" element={<Aboutus/>}/>
                <Route path="/navigation" element={<Navigation/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
