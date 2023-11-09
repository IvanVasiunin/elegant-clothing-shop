import Header from './Header.jsx';
import Shop from './Shop.jsx';
import CartContextProvider from 'store/shoping-cart-context.jsx';

function App() {

  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
