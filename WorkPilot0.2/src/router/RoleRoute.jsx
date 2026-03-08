import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

/**
 * RoleRoute – restricts access based on user role.
 * @param {string[]} allowedRoles – array of roles that can access this route.
 */
const RoleRoute = ({ allowedRoles }) => {
    const { role } = useSelector(state => state.auth)
    if (!allowedRoles.includes(role)) {
        return <Navigate to="/unauthorized" replace />
    }
    return <Outlet />
}

export default RoleRoute
