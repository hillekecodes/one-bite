import Navigation from './Components/Navigation'; 
import LeftInterface from './Components/LeftInterface'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <React router >
    
    <div className="App">
      <Navigation />
      {/* <Context> */}
      <LeftInterface />
      {/* </Context> */}
    </div>
    // </ React router >
  );
}

export default App;
