import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import ReactContact from './Components/REAT_CONTACT/ReactContact';

function App() {
  const Router=createBrowserRouter([
    {
      path:'e-log',
      element:<Login/>
    },
    {
      path:'/',
      element:<ReactContact/>
    }
  ])
  return (
   <div>
    <RouterProvider router={Router}></RouterProvider>
   </div>
  );
}

export default App;
