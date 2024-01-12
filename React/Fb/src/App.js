import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import ForgottenPass from './Pages/Login/ForgottenPass';
import Home from './Pages/Home/Home';


function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    }, {
      path: '/forgot',
      element: <ForgottenPass />,
    }, {
      path: '/signup',
      element: <SignUp />,
    }, 
    {
      path:'home',
      element:<Home/>
    }
  ]);
  return (
    <div className="App">
      <div className="App-header">
      <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
