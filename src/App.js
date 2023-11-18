
import './App.css';

import Cart from './component/cart/Cart';
import { Home } from './component/home/Home';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,Link,Outlet,Routes} from 'react-router-dom'
import {Jewelery } from './component/menu/jewelery/Jewelery';
import { Electronics } from './component/menu/electronics/Electronics';
import { Clothing } from './component/menu/clothing/Clothing';
import Navbar from '../src/component/navbar/Navbar.js'
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
      {console.log("S")}
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
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

