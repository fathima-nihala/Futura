import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddData from './Component/AddData';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<AddData/>
    }
  ]
   
  )

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
