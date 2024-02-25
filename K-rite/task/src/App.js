import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './COMPONENTS/Main/Main';
import SignUp from './COMPONENTS/Login/SignUp';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path:'signup',
      element:<SignUp/>
    }

  ])
  
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
