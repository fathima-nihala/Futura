// import React from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from '../Home/Home'

// const Contents = () => {
//     const router=createBrowserRouter([
//         {
//             path:'home',
//             element:<Home/>
//         }
//     ])
//   return (

//     <div>
//         <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default Contents

import React from 'react'
import { Outlet } from 'react-router-dom'

export const Contents = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
export default Contents
