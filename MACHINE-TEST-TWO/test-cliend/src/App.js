import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/Main/Main';
import Register from './Components/Register/Register';
import { BiLogIn } from 'react-icons/bi';
import Login from './Components/Register/Login';
import { useSelector } from 'react-redux';

function App() {

  const Item = useSelector((state) => state.Login.LoginInfo[0]);
  console.log('Item', Item);

  if (Item) {
    var token = Item && Item.accessToken;
    console.log('token!!', token);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: token ? <Main /> : <Login />,
    },
    {
      path: 'reg',
      element: <Register />
    },
    {
      path: 'login',
      element: <Login />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
