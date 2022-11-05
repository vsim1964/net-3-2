import './App.css';
import Listing from './Components/Listing';
import items from './Components/Data/items';

function App() {
  return (
      <div className="App">
        <Listing items={items}/>
      </div>
  );
}

export default App;
