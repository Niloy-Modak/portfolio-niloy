import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/ui/Loading";
import ProjectDetails from "../components/ProjectDetails";


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
            },
            {
                path: '/project/:id',
                Component: ProjectDetails,  
                HydrateFallback: Loading,
            }
        ]
    }
    
])

export default Router