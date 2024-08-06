import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorComponent from "../components/ErrorComponent";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsCommentsPage from "../pages/PostsCommentsPage";
import UserPage from "../pages/UserPage";

export const router = createBrowserRouter([{
    path:'/', element:<MainLayout/>,
    errorElement:<ErrorComponent/>,
    children:[
        {index:true, element:<HomePage/>},
        {path:'users', element:<UsersPage/>},
        {path:'users/:id', element:<UserPage/>},
        {path:'posts', element:<PostsPage/>},
        {path:'posts/:postId/comments', element:<PostsCommentsPage/>},
        {path:'comments', element:<CommentsPage/>},


    ]
}
]);