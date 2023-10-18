import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import ApiReduxFetch from './Components/ApiReduxFetch';

function App() {
  const router=createBrowserRouter([
  {
    path:'api',
    element:<ApiReduxFetch/>
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
