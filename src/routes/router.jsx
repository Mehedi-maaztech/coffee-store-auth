import { createBrowserRouter } from 'react-router-dom';
import AddCoffee from '../component/AddCoffee';
import UpdateCoffee from '../component/UpdateCoffee';
import Homepage from '../pages/Homepage';
import CoffeeDetails from '../component/CoffeeDetails';
import HomeLayouts from '../layouts/HomeLayouts';
import AuthLayout from '../layouts/AuthLayout';
import Register from '../component/Register';
import Login from '../component/Login';
import Users from '../Users/Users';
import PrivateRoute from './PrivateRoute';
import Users2 from '../Users/Users2';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: () => fetch('https://coffee-store-server-d5z5.onrender.com/coffee')
            },
            {
                path: '/addCoffee',
                element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
            },
            {
                path: '/updateCoffee/:id',
                element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
                loader: ({ params }) => fetch(`https://coffee-store-server-d5z5.onrender.com/coffee/${params.id}`)
            },
            {
                path: '/coffeeDetails/:id',
                element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://coffee-store-server-d5z5.onrender.com/coffee/${params.id}`)
            },
        ]
    },
    {
        path: '/auth',
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-d5z5.onrender.com/users')
    },
    {
        path: '/users2',
        element: <Users2></Users2>
    }

])

export default router;