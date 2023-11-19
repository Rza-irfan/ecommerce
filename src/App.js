
import './App.css';

import Cart from './pages/cart/Cart';
import { Home } from './pages/home/Home';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,Link,Outlet,Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import store from './store/store';
import Clothing from '../src/pages/clothing/Clothing'
import {Electronics} from '../src/pages/electronics/Electronics'
import {Jewelery} from '../src/pages/jewelery/Jewelery'
import { Provider } from 'react-redux'; 

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/groceries" element={<Jewelery />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </div>
  );
}
export default App;

const Root = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </Provider>
    </>
  );
};

