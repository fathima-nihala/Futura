import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import './App.css';
import Wrk1 from './Components/Wrk1';
import Wrk1main from './Components/Wrk1main';
import Cart from './redux/cart';
// import Cart from './Components/Cart';
import Cartmain from './Components/Cartmain';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Wrk1/>
    },
    {
      path:'cart',
      element:<Cartmain/>
    },
    
  
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
