import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './UserComponent/Main/Main';
import Menu from './UserComponent/Menu/Menu';
import Chef1 from './UserComponent/Menu/MenuPages/ChefPage/Chef1';
import Chef2 from './UserComponent/Menu/MenuPages/ChefPage/Chef2';
import Chef3 from './UserComponent/Menu/MenuPages/ChefPage/Chef3';
import About from './UserComponent/About/About';
import AdminLogin from './LoginPages/AdminLogin';
import Register from './LoginPages/Register';
import Login from './LoginPages/Login';
import AdminRegister from './LoginPages/AdminRegister';
import AdminMain from './AdminComponents/AdminMain/AdminMain';
import Home from './AdminComponents/ContentItem/Home';
import AddItem from './AdminComponents/ContentItem/AddItem';
import ManageItem from './AdminComponents/ContentItem/ManageItem';
import User from './AdminComponents/ContentItem/User';
import AuthProvider from './Context/AuthProvider';
import UpdateProfile from './UserComponent/Main/MainPages/UpdateProfile';

function App() {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Menu />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path:'/update-profile',
          element:<UpdateProfile/>
        }
      ]
    },
    {
      path: '/williumjoe',
      element: <Chef1 />
    },
    {
      path: '/rajeshpatel',
      element: <Chef2 />
    },
    {
      path: '/lila',
      element: <Chef3 />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/adminlogin',
      element: <AdminLogin />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/adminreg',
      element: <AdminRegister />
    },
    //**********************************ADMIN---MODULE********************* */
    {
      path: '/',
      element: <AdminMain />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/additems',
          element: <AddItem />
        },
        {
          path: '/manage',
          element: <ManageItem />
        },
        {
          path: 'user',
          element: <User />
        }
      ]
    }

  ])
  return (
    <div className="App">
      <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
