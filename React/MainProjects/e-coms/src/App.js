// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Log-in/Login';
import Register from './Components/Register/Register';
import {useSelector} from 'react-redux'
import Main from './Components/Main/Main';
import Home from './Components/Main/Home';
import SeeMore from './Components/Pages/SeeMore';

function App() {
  const data=useSelector((state)=>state.LoginEcom.loginEcomInfo[0])
  console.log("data",data);

  if (data) {
    var token=data && data.accessToken
    console.log("token",token);
  }
  const router=createBrowserRouter([
    {
      path:'/',
      element:token ? <Main/> : <Login/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/cmore',
          element:<SeeMore/>
        }
      ]
    },
    {
      path:'/log',
      element:<Login/>
    },
    {
      path:'register',
      element:<Register/>
    },
    {
      path:'/',
      element:<Main/>,
     
    }

    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
