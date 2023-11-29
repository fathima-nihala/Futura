import './App.css';
import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { useSelector } from 'react-redux';
import Home from './Components/Home';
import Profile from './Components/Profile';

function App() {

      const data=useSelector((state)=>state.Login.loginInfo[0])
      console.log("ilu",data);


      if(data){
        var Token=data && data.accessToken
        console.log("token?",Token);
      }
  const Router=createBrowserRouter([
    {
      path:'/',
      element:Token ? <Home/> :< Login/>
    },
    {
      path:'sign',
      element:<SignUp/>
    },
    {
      path:'log',
      element:<Login/>
    },
    {
      path:'prof',
      element:<Profile/>
    },
  ])
  return (
    <div className="App">
     {/* <SignUp/>
     <Login/> */}
     <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
