import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import RegistrationPage from "../pages/RegistrationPage";
import CarsPage from "../pages/CarsPage";

export const router = createBrowserRouter([
    {
        path:'/', element: <MainLayout/>,
        errorElement : <h1>Error!!!</h1>,
        children:[
            {
                index:true, element: <AuthPage/>
            },
            {
                path:'/registration', element:<RegistrationPage/>
            },
            {
                path:'/cars', element:<CarsPage/>
            }
        ]
    }
]);
