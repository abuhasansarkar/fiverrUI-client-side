import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Add from "../pages/Add/Add";
import Gig from "../pages/Gig/Gig";
import Home from "../pages/Home/Home";
import Message from "../pages/Message/Message";
import Messages from "../pages/Messages/Messages";
import MyGigs from "../pages/MyGigs/MyGigs";
import Orders from "../pages/Orders/Orders";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/gigs',
                    element: <Gig></Gig>
               },
               {
                    path: '/gig/:id',
                    element: <Gig></Gig>
               },
               {
                    path: '/orders',
                    element: <Orders></Orders>
               },
               {
                    path: '/mygigs',
                    element: <MyGigs></MyGigs>
               },
               {
                    path: '/add',
                    element: <Add></Add>
               },
               {
                    path: '/message',
                    element: <Message></Message>
               },
               {
                    path: '/messages',
                    element: <Messages></Messages>
               },
          ]
     }
])