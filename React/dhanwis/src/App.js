import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Register } from './Components/Register/Register';

function App() {
  const Router = createBrowserRouter([
    {
      path:'/',
      element:<Register/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
