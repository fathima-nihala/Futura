
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
// import Wrk1 from './Components/Wrk1.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReduxApiFetch from "./Components/ReduxApiFetch";
import Signup from "./Components/Signup/Signup";
import UseStateHook from "./Hooks/UseStateHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import { Appcontext } from "./Hooks/context";
import UseContextHook from "./Hooks/UseContextHook";
import Useref from "./Hooks/Useref";




function App() {
  const router=createBrowserRouter([
    // {
    //   path:'api',
    //   element:<ReduxApiFetch/>
    // },
    {
      path:'signup-persist',
      element:<Signup/>
    },
    {
      path:'usestate',
      element:<UseStateHook/>
    },
    {
      path:'use-effect',
      element:<UseEffectHook/>
    },
    {
      path:'context',
      element:<UseContextHook/>
    },
    {
      path:'useref',
      element:<Useref/>
    },
   
    
  ])
  return (
    <div className="App">
    <Appcontext.Provider value={'aaaa'}>
    <RouterProvider router={router}></RouterProvider>

    
    </Appcontext.Provider>
     </div>
  );
}

export default App;
