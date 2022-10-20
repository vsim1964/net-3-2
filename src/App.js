import './App.css';
import Listing from './Components/Listing';
import items from './Components/Data/items';

for (let i = 0; i < items.length; i++) {
  if (items[i].currency_code === 'USD') {
    items[i].currency_code = '$';
  } else if (items[i].currency_code === 'EUR') {
    items.currency_code = '€';
  }
}

let color = '';
for (let i = 0; i < items.length; i++) {
  if (items[i].quantity <= 10) {
    color = 'item-quantity level-low';
  } else if (items[i].quantity > 10 && items[i].quantity <= 20) {
    color = 'item-quantity level-medium';
  } else if (items[i].quantity > 20) {
    color = 'item-quantity level-high';
  }
}

function App() {
  return (
      <>
        <Listing items={items} className={color}/>
      </>
  );
}
export default App;

