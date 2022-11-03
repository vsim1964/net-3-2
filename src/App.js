import './App.css';
import Listing from './Components/Listing';
import items from './Components/Data/items';

for (let i = 0; i < items.length; i++) {
  if (items[i].title.length > 50) {
    items[i].title = items[i].title.substring(0, 50) + '...';
  }
}

for (let i = 0; i < items.length; i++) {
  if (items[i].currency_code === 'USD') {
    items[i].currency_code = '$';
  } else if (items[i].currency_code === 'EUR') {
    items.currency_code = '€';
  }
}

function App() {
  return (
      <>
        <Listing items={items} />
      </>
  );
}
export default App;

