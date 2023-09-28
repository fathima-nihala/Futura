
import { createBrowserRouter,Form,RouterProvider } from "react-router-dom";
import Sample from "./Components/Sample";
import Sample1 from "./Components/Sample1";
import Useeffect from "./Components/Useeffect";
import Userefhook from "./Components/Userefhook";
import Api from "./Components/Api";
import Card from "./TASKS/Card";
import Usereducer from "./Components/Usereducer";
import { Appcontext } from "./Context";
import Task2 from "./TASKS/Task2";
// import Task2 from "./TASKS/Task2";
// import Localstorage from "./Components/Localstorage";
import Task1 from "./TASKS/Task1";
// import Usereducer from "./Components/Usereducer";
import Usered from "./TASKS/Usereducerhook";
import Usememo from "./Components/Usememo";
import Usecallback from "./Components/Usecallback";
// import Task from "./TASKS/Task";
function App() {
    const myRouter=createBrowserRouter([
    {
      path:'/',
      element:<Task1/>
    },
    {
      path:'niha',
      element:<Task2/>
    },
    {
      path:'if',
      element:<Usereducer/>
    },
    {
      path:'memo',
      element:<Usememo/>
    },
    {
      path:'callback',
      element:<Usecallback/>
    },
    {
      path:'sample',
      element:<Sample1/>
    },
    {
      path:'ref',
      element:<Userefhook/>
    },
    {
      path:'api',
      element:<Api/>
    },
    {
      path:'card',
      element:<Card/>
    },
    {
      path:'effect',
      element:<Useeffect/>
    },

  ])
  return (
    <RouterProvider router={myRouter}></RouterProvider>
    
  
  );
}

export default App;
