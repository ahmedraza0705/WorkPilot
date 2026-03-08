import { Menu, Bell, Search } from 'react-feather'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ROUTE_TITLES = {
    '/dashboard': 'Dashboard',
    '/candidate': 'Candidate Management',
    '/onboarding': 'Onboarding',
    '/interview': 'Interview Tracking',
    '/clientFeedback': 'Client Feedback',
    '/lead': 'Leads',
    '/clients': 'Clients Directory',
    '/users': 'Users Management',
    '/transactionlist': 'Transaction List',
    '/hot-vacancy': 'Hot Vacancy',
    '/resume': 'Resume Inquiry',
    '/jobmatches': 'Job Matches',
    '/jobopening': 'Job Openings',
    '/best-matches': 'Best Matches',
    '/hire': 'Hired Candidates',
    '/documentation': 'HR Documentation',
    '/saved-candidates': 'Saved Candidates',
    '/pricing': 'Pricing Plans',
    '/superadmin/dashboard': 'Dashboard',
    '/superadmin/agency': 'Agency Management',
    '/superadmin/transactionlist': 'Transaction List',
    '/superadmin/jobCategory': 'Job Category',
    '/superadmin/industries': 'Industries',
}

const Topbar = () => {
    const { user, role } = useSelector(state => state.auth)
    const location = useLocation()
    const pageTitle = ROUTE_TITLES[location.pathname] || 'Unique World'

    return (
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
            <div>
                <h1 className="text-lg font-bold text-slate-800">{pageTitle}</h1>
                <p className="text-xs text-slate-400 mt-0.5">Unique World · SURA Platform</p>
            </div>

            <div className="flex items-center gap-3">
                {/* Search bar */}
                <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 text-sm text-slate-400 w-52">
                    <Search size={15} />
                    <span>Search…</span>
                </div>

                {/* Notifications */}
                <button className="relative w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                    <Bell size={16} className="text-slate-600" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                </button>

                {/* User avatar */}
                <div className="flex items-center gap-2 pl-2">
                    <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center shadow">
                        <span className="text-white font-semibold text-sm">
                            {user?.name?.charAt(0) || 'U'}
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-slate-800 leading-tight">{user?.name}</p>
                        <p className="text-xs text-slate-400">{role}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Topbar
