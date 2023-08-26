import Register from "../pages/Register"
import Login from "../pages/Login"
const guestRoutes=[
    {
        path: '/register',
        element: <Login/>
    },
    {
        path: '/login',
        elememt: <Register/>
    }
]
export default guestRoutes;