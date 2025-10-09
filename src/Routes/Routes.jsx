import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/appdetails";

const router=createBrowserRouter([

    {
        path:'/',
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home
            },

            {
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
            },
            {
                path:'/AppDetails/:id',
                Component:AppDetails
            }
        ]
    },
])

export default router