import { createBrowserRouter,Form,RouterProvider } from "react-router-dom";

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
// import Wrk1 from "./WRK/Wrk1";
// import Wrk1main from "./WRK/Wrk1main";

// import Form from "./CMPNTNS/Form";

// import ReactOne from "./CMPNTNS/ReactOne";
function App() {
  const Router=createBrowserRouter([
    {
      path:'/',
      element: <Formuseref/>  
    },
    {
      path:'bootstrap-main',
      element:<Main/>  
    },
    {
      path:'reduxapifetch',
      element:<ReduxApiFetch/>  
    },
    {
      path:'bootbtn',
      element:<Btsrtpbutton/>  
    },
    // {
    //   path:'wrk1',
    //   element:<Wrk1/> 
    // },
    // {
    //   path:'wrk1main',
    //   element:<Wrk1main/>
    // }
    
  ])

  return (
    <RouterProvider router={Router}></RouterProvider>
    // <div>
    //   {/* <ReduxApiFetch/>
    //   <Rdxchild/> */}
    //   <Wrk1/>
    //   {/* <Wrk1main/> */}
    // </div>
  
  );
}

export default App;
