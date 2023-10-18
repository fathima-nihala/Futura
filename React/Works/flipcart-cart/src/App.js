
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
import UsereducerHook from "./Hooks/UsereducerHook";
import UseMemo from "./Hooks/UseMemo";
import ReactMemo from "./Hooks/ReactMemo";
import Callback from "./Hooks/Callback";




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
    {
      path:'use-red',
      element:<UsereducerHook/>
    },
    {
      path:'use-memo',
      element:<UseMemo/>
    },
    {
      path:'react-memo',
      element:<ReactMemo/>
    },
    {
      path:'call-back',
      element:<Callback/>
    }
   
    
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
