import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
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
  
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
