import { Navigate, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
// import './App.css';
// import Main from './Components/Main/Main';
// import Home from './Components/Home/Home';

// import { useSelector } from 'react-redux';
// import AddProduct from './Components/Pages/AddProduct';
// import Users from './Components/Pages/Users';
// import ManageProducts from './Components/Pages/ManageProducts';
// import UserMain from './User/ComponentTwo/UserMain/UserMain';
// import UserHome from './User/ComponentTwo/UserMain/UserHome';
// import SeeMore from './User/ComponentTwo/UserPages/SeeMore';
// import Login from './Login/Login';
// import SignUp from './Login/SignUp';
// import { type } from '@testing-library/user-event/dist/type';
// import All from './User/ComponentTwo/UserMain/All';
// import Women from './User/ComponentTwo/UserMain/Women';
// import Men from './User/ComponentTwo/UserMain/Men';
// import Kids from './User/ComponentTwo/UserMain/Kids';
// import View from './User/ComponentTwo/View';
// import UserLogin from './Login/UserLogin';
// import UserSignUp from './Login/UserSignUp';


import React from 'react';
// import {  Routes, Route, Navigate } from 'react-router-dom';
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
import All from './User/ComponentTwo/UserMain/All';
import Women from './User/ComponentTwo/UserMain/Women';
import Men from './User/ComponentTwo/UserMain/Men';
import Kids from './User/ComponentTwo/UserMain/Kids';
import View from './User/ComponentTwo/View';
import UserLogin from './Login/UserLogin';
import UserSignUp from './Login/UserSignUp';

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
    // const type = item && item.type;

  }




  const Router = createBrowserRouter([
    {
      path: '/',
      element: token ? <UserMain /> : <UserLogin />,
      children: [
        {
          path: '/', // This represents the homepage route
          element: token ? <UserHome /> : <Navigate to="/" replace />, // Redirect to homepage if no token
        },
        {
          path: 'all',
          element: <All />
        },
        {
          path: '/cmore',
          element: <SeeMore />
        },
        {
          path: '/women',
          element: <Women />
        },
        {
          path: '/men',
          element: <Men />
        },
        {
          path: '/kids',
          element: <Kids />
        }
      ]
    },
    {
      path: '/view/:id',
      element: <View />
    },

    {
      path: '/',
      element: token ? <Main /> : <Login />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/adproduct',
          element: <AddProduct />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/manage',
          element: <ManageProducts />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/usereg',
      element: <UserSignUp />
    }

  ])


  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>

      {/* <Router>
        <Routes>
          <Route
            path="/"
            element={token ? <UserMain /> : <UserLogin />}
          >
            <Route path="/" element={token ? <UserHome /> : <Navigate to="/" replace />} />
            <Route path="all" element={<All />} />
            <Route path="/cmore" element={<SeeMore />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
          </Route>
          <Route path="/view/:id" element={<View />} />
          <Route
            path="/"
            element={token ? <Main /> : <Login />}
          >
            <Route path="/" element={<Home />} />
            <Route path="/adproduct" element={<AddProduct />} />
            <Route path="/users" element={<Users />} />
            <Route path="/manage" element={<ManageProducts />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/usereg" element={<UserSignUp />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
