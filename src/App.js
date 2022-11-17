import Navigation from './Components/Navigation'; 
import LeftInterface from './Components/LeftInterface'; 
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import background from './Components/Images/background.jpg';
import './App.css'

function App() {
  return (
   <Router>
      <div className="App">
      <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/begin" element={<LeftInterface />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
