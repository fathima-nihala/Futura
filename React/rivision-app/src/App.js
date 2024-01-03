import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import ApiReduxFetch from './Components/ApiReduxFetch';
import SignUp from './Check/SignUp';

function App() {
  const router=createBrowserRouter([
  {
    path:'api',
    element:<ApiReduxFetch/>
  },
 {
     path:'do' ,
     element:<SignUp/>  
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
