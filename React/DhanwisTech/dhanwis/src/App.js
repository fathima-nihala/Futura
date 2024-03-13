import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddData from './ComponentTwo/AddData';
import EditData from './ComponentTwo/EditData';
import { Register } from './Component/Register';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      // element: <AddData />
      element:<Register/>
    },

   
  ])
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
