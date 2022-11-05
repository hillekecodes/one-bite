import Navigation from './Components/Navigation'; 
import LeftInterface from './Components/LeftInterface'; 
import GoalList from './Components/GoalList'; 
import Goal from './Components/Goal'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LeftInterface />
      <GoalList />
    </div>
  );
}

export default App;
