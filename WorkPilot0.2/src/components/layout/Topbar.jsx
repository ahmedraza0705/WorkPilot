import { Menu, Bell, Search, Settings } from 'react-feather'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    const pageTitle = ROUTE_TITLES[location.pathname] || 'Overview'

    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-20">
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={location.pathname}
            >
                <h1 className="text-lg font-bold text-[#0F172A] tracking-tight">{pageTitle}</h1>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">WorkPilot · Management Console</p>
            </motion.div>

            <div className="flex items-center gap-4">
                {/* Search bar */}
                <div className="hidden lg:flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-slate-400 w-64 focus-within:border-blue-200 focus-within:bg-white transition-all">
                    <Search size={14} className="shrink-0" />
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="bg-transparent border-none outline-none text-xs font-medium text-slate-600 w-full placeholder:text-slate-400"
                    />
                </div>

                <div className="flex items-center gap-2 border-r border-slate-100 pr-4">
                    {/* Settings */}
                    <button className="w-10 h-10 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 flex items-center justify-center transition-all">
                        <Settings size={18} />
                    </button>

                    {/* Notifications */}
                    <button className="relative w-10 h-10 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 flex items-center justify-center transition-all">
                        <Bell size={18} />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white" />
                    </button>
                </div>

                {/* User avatar */}
                <div className="flex items-center gap-3 pl-2 group cursor-pointer">
                    <div className="flex flex-col items-end hidden sm:flex">
                        <p className="text-sm font-bold text-[#0F172A] leading-tight group-hover:text-blue-600 transition-colors">{user?.name || 'User'}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
                        <span className="text-white font-bold text-sm">
                            {user?.name?.charAt(0) || 'U'}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Topbar
