import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";

// // import logo from './logo.svg';
// // import './App.css';
// // import Reactmemo from './Reactmemo';
// import ReactTwo from './CMPNTNS/ReactOne';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formuseref from "./CMPNTNS/Formuseref";
import Main from "./CMPNTNS/Main";
import ReduxApiFetch from "./CMPNTNS/ReduxApiFetch";
import Btsrtpbutton from "./CMPNTNS/Btsrtpbutton";
import Rdxchild from "./CMPNTNS/Rdxchild";
import LoginSignUp from "./LOGIN-SIGNUP/LoginSignUp";
import SignUp from "./REACT-SIGNUP/SignUp";
import Display from "./REACT-SIGNUP/Display";
import Profile from "./REACT-SIGNUP/Profile";
import Login from "./REACT-SIGNUP/Login";
import { useSelector } from "react-redux";
import Home from "./REACT-SIGNUP/Home";
// import { Navbar } from "react-bootstrap";
import Navbar from "./REACT-SIGNUP/Navbar.jsx"
import HomeNav from "./REACT-SIGNUP/work/HomeNav.jsx";
import Update from "./REACT-SIGNUP/work/Update.jsx";
// import Wrk1 from "./WRK/Wrk1";
// import Wrk1main from "./WRK/Wrk1main";

// import Form from "./CMPNTNS/Form";

// import ReactOne from "./CMPNTNS/ReactOne";
function App() {

  const data = useSelector((state) => state.Login.loginInfo[0])
  console.log('***', data);
  if (data) {
    var Token = data && data.accessToken
    console.log("token ?", Token);
  }
  const Router = createBrowserRouter([
    {
      path: '/',
      element: Token ? <Home /> : <Login />
    },
    {
      path: 'formuseref',
      element: <Formuseref />
    },
    {
      path: 'bootstrap-main',
      element: <Main />
    },
    {
      path: 'reduxapifetch',
      element: <ReduxApiFetch />
    },
    {
      path: 'bootbtn',
      element: <Btsrtpbutton />
    },
    // {
    //   path:'wrk1',
    //   element:<Wrk1/> 
    // },
    // {
    //   path:'wrk1main',
    //   element:<Wrk1main/>
    // }
    {
      path: 'log-sign',
      element: <LoginSignUp />
    },
    {
      path: 'reactSignUp',
      element: <SignUp />
    },
    {
      path: 'display',
      element: <Display />
    },
    {
      path: 'getid',
      element: <Profile />
    },
    {
      path: 'navbar1',
      element: <Navbar />
    },
    {
      path: 'home-nav',
      element: <HomeNav />
    },
    {
      path:'update',
      element:<Update/>
    }

  ])

  return (


    <div className="App">

      <RouterProvider router={Router}></RouterProvider>

    </div>

  );
}

export default App;
