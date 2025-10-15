import { createBrowserRouter } from 'react-router-dom';
import AddCoffee from '../component/AddCoffee';
import UpdateCoffee from '../component/UpdateCoffee';
import Homepage from '../pages/Homepage';
import CoffeeDetails from '../component/CoffeeDetails';
import HomeLayouts from '../layouts/HomeLayouts';
import AuthLayout from '../layouts/AuthLayout';
import Register from '../component/Register';
import Login from '../component/Login';

const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <Homepage></Homepage>,
    //     loader : () => fetch('http://localhost:5000/coffee')
    // },
    // {
    //     path: '/addCoffee',
    //     element: <AddCoffee></AddCoffee>
    // },
    // {
    //     path: '/updateCoffee/:id',
    //     element: <UpdateCoffee></UpdateCoffee>,
    //     loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
    // },
    // {
    //     path: '/coffeeDetails/:id',
    //     element: <CoffeeDetails></CoffeeDetails>,
    //     loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
    // },
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/coffeeDetails/:id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
    }

])

export default router;