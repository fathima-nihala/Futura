import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import { useSelector } from 'react-redux';
import User from './Components/Home/User';
import AddProduct from './Components/Pages/AddProduct';
import Users from './Components/Pages/Users';

function App() {
  const data=useSelector((state)=>state.Login.LoginInfo[0])
  console.log("data",data);

  if (data) {
    var Token=data && data.accessToken
    console.log("token?",Token);
  }

  const Router=createBrowserRouter([
    {
      path:'/',
      element:Token ? <Main/> : <Login/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/user',
          element:<User/>
        },
        {
          path:'/adproduct',
          element:<AddProduct/>
        },
        {
          path:'/users',
          element:<Users/>
        }
        
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'signup',
      element:<SignUp/>
    },
    
   
  ])
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
