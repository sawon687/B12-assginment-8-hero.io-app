import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router=createBrowserRouter([

    {
        path:'/',
        Component:RootLayout,
        children:[
            {
                index:true,
                path:'/Home',
                Component:Home
            },
            {
                 path:'/Apps',
                 Component:Apps
            },
            {
                path:'/Installation',
                Component:Installation
            }
        ]
    },
])

export default router