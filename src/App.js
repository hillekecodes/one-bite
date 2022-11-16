import Navigation from './Components/Navigation'; 
import LeftInterface from './Components/LeftInterface'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import background from './background.jpg';

function App() {
  return (
   <Router>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<component />} />
          {/* <Route exact path="/" element={<component />} />
          <Route exact path="/" element={<component />} /> */}
        </Routes>

        
        <LeftInterface />
      </div>
    </Router>
  );
}

export default App;
