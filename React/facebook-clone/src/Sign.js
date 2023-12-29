import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import SignUp from './SignUp';


function Sign(){

const Router=createBrowserRouter([
    {
        Path:'facebook-signup',
        element:<SignUp/>
    }
])
return(
    <div className='Sign'>
        <RouterProvider router={Router}></RouterProvider>
    </div>
);
}
export default Sign;



