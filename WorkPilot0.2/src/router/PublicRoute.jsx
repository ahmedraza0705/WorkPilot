import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ROLE_HOME = {
    SuperAdmin: '/superadmin/dashboard',
    Admin: '/dashboard',
    TeamLeader: '/dashboard',
    BDM: '/dashboard',
    Recruiter: '/dashboard',
    Client: '/jobopening',
    Candidate: '/dashboard',
}

/**
 * PublicRoute – prevents logged-in users from accessing login/register pages.
 * Redirects to the role's home screen if already authenticated.
 */
const PublicRoute = () => {
    const { isLoggedIn, role } = useSelector(state => state.auth)
    if (isLoggedIn && role) {
        return <Navigate to={ROLE_HOME[role] || '/dashboard'} replace />
    }
    return <Outlet />
}

export default PublicRoute
