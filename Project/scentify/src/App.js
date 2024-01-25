import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import UserMain from './User/UserComponent/UserMain/UserMain';
import UserHome from './User/UserComponent/UserMain/UserHome';
import Register from './Register & Login/Register';
import Login from './Register & Login/Login';
import AdminMain from './Admin/AdminMain/AdminMain';

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<UserMain/>,
      children:[
        {
          path:'/',
          element:<UserHome/>
        },
      ]
    },
    {
      path:'register',
      element:<Register/>
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'/Main',
      element:<AdminMain/>,
      children:[

      ]
    }

  ])

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
