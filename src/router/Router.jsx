import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/ui/Loading";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,  
                HydrateFallback: Loading,
                // loader: ()=> fetch('../DoctorsData.json')
            }
        ]
    }
    
])

export default Router