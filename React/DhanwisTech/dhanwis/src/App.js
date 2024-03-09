import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddData from './ComponentTwo/AddData';
import EditData from './ComponentTwo/EditData';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <AddData />

    },
   
  ])
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
