import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShieldOff, ArrowLeft } from 'react-feather'

const ROLE_HOME = {
    SuperAdmin: '/superadmin/dashboard',
    Admin: '/dashboard',
    TeamLeader: '/dashboard',
    BDM: '/dashboard',
    Recruiter: '/dashboard',
    Client: '/jobopening',
    Candidate: '/dashboard',
}

const Unauthorized = () => {
    const navigate = useNavigate()
    const { role } = useSelector(state => state.auth)

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
            <div className="text-center max-w-sm">
                <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <ShieldOff size={36} className="text-red-500" />
                </div>
                <h1 className="text-6xl font-extrabold text-slate-800 mb-2">403</h1>
                <h2 className="text-xl font-bold text-slate-700 mb-3">Access Denied</h2>
                <p className="text-slate-500 text-sm mb-6">
                    You don't have permission to view this page. This area requires a different role.
                </p>
                <button
                    onClick={() => navigate(ROLE_HOME[role] || '/login')}
                    className="btn-primary flex items-center gap-2 mx-auto"
                >
                    <ArrowLeft size={16} />
                    Go to My Dashboard
                </button>
            </div>
        </div>
    )
}

export default Unauthorized
