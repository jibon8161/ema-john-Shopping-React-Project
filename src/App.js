
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders';
import Inventory from './components/inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path: '/',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>


      },
      {

        path: '/orders',
        loader: productsAndCartLoader,
        element: < Orders></Orders >

      },
      {


        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'about',
        element: <About></About>
      }



    ]
  },






])

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
