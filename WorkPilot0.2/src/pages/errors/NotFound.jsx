import { useNavigate } from 'react-router-dom'
import { Home } from 'react-feather'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
            <div className="text-center max-w-sm">
                <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Home size={36} className="text-primary-500" />
                </div>
                <h1 className="text-6xl font-extrabold text-slate-800 mb-2">404</h1>
                <h2 className="text-xl font-bold text-slate-700 mb-3">Page Not Found</h2>
                <p className="text-slate-500 text-sm mb-6">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <button onClick={() => navigate(-1)} className="btn-primary flex items-center gap-2 mx-auto">
                    <Home size={16} />Go Back
                </button>
            </div>
        </div>
    )
}

export default NotFound
