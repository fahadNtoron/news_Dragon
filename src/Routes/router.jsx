import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Cat4egoryNews from "./Pages/Cat4egoryNews";

export const router = createBrowserRouter([
    { 
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "",
                element: <Navigate to={"category/01"} />,
            },
            
            {
                path: "/category/:id",
                element: <Cat4egoryNews></Cat4egoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },]
        }


])