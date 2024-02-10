import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Component/Main/Main';
import Home from './Component/ContentItem/Home';
import AddItem from './Component/ContentItem/AddItem';
import ManageItem from './Component/ContentItem/ManageItem';
import User from './Component/ContentItem/User';


function App() {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/additems',
          element:<AddItem/>
        },
        {
          path:'/manage',
          element:<ManageItem/>
        },
        {
          path:'user',
          element:<User/>
        }
      ]
    }
  ])

  return (
    <div className="App">
           <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
