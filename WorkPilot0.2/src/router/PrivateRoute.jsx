import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

/**
 * PrivateRoute – blocks unauthenticated users.
 * Renders child routes if logged in, otherwise redirects to /login.
 */
const PrivateRoute = () => {
    const { isLoggedIn } = useSelector(state => state.auth)
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
