import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Loading from './Components/Loading';
function App() {
  const router=createBrowserRouter([
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'signup',
      element:<Signup/>
    },
    {
      path:'/',
      element:<Loading/>
    }
   
  
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
