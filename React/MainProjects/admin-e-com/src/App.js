import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';

import { useSelector } from 'react-redux';
import AddProduct from './Components/Pages/AddProduct';
import Users from './Components/Pages/Users';
import ManageProducts from './Components/Pages/ManageProducts';
import UserMain from './User/ComponentTwo/UserMain/UserMain';
import UserHome from './User/ComponentTwo/UserMain/UserHome';
import SeeMore from './User/ComponentTwo/UserPages/SeeMore';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import { type } from '@testing-library/user-event/dist/type';
import All from './User/ComponentTwo/UserMain/All';
import Women from './User/ComponentTwo/UserMain/Women';
import Men from './User/ComponentTwo/UserMain/Men';
import Kids from './User/ComponentTwo/UserMain/Kids';

function App() {
  // const data=useSelector((state)=>state.Login.LoginInfo[0])
  // console.log("hey data",data);

  // const item=useSelector((state)=>state.Login.LoginInfo[0])
  // console.log('item',item);
  // if (item) {
  //   var token=item && item.accessToken
  //   console.log("token?",token);
  // }

  const item = useSelector((state) => state.Login.LoginInfo[0]);
  console.log('item', item);

//

  if (item) {
    var token = item && item.accessToken;
    console.log('token?', token);

    //
    const type = item && item.type;

  }

  
  

  const Router=createBrowserRouter([
    {
      path :'/',
      element:<UserMain/>,
      children:[
        {
          path:'/',
          element:<UserHome/>
        },
        {
          path:'all',
          element:<All/>
        },
        {
          path:'/cmore',
          element:<SeeMore/>
       },
       {
        path:'/women',
        element:<Women/>
       },
       {
        path:'/men',
        element:<Men/>
       },
       {
        path:'/kids',
        element:<Kids/>
       }
      
    ]
   },
   
    {
      path:'/',
      element: token ? <Main/> : <Login/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/adproduct',
          element:<AddProduct/>
        },
        {
          path:'/users',
          element:<Users/>
        },
        {
          path:'/manage',
          element:<ManageProducts/>
        }   
      ]
    },
  //   {
  //     path:'/login',
  //     element:<Login/>
  //   },
  //   {
  //     path:'signup',
  //     element:<SignUp/>
  //   },

  //

  // {
  //   path: '/',
  //   element: token && type === 'user' ? <UserMain /> : <Main />,
  //   children: [
  //     {
  //       path: '/',
  //       element: token && type === 'user' ? <UserHome /> : <Home />,
  //     },
  //     {
  //       path: '/adproduct',
  //       element: <AddProduct />,
  //     },
  //     {
  //       path: '/users',
  //       element: <Users />,
  //     },
  //     {
  //       path: '/manage',
  //       element: <ManageProducts />,
  //     },
  //   ],
  // },
  {
    path: '/cmore',
    element: <SeeMore />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
    
  ])


  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
