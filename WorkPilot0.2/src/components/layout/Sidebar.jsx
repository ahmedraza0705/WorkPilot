import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogOut, ChevronRight, ChevronLeft } from 'react-feather'
import { logout } from '../../store/authSlice'
import { navConfig } from '../../navigation'

const ROLE_BADGE_CLASS = {
    Admin: 'bg-purple-50 text-purple-600',
    TeamLeader: 'bg-blue-50 text-blue-600',
    BDM: 'bg-emerald-50 text-emerald-600',
    Recruiter: 'bg-amber-50 text-amber-600',
    Client: 'bg-orange-50 text-orange-600',
    Candidate: 'bg-teal-50 text-teal-600',
}

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { role, user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filteredNav = navConfig.filter(item => item.permission.includes(role))

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const sidebarVariants = {
        expanded: { width: 256, transition: { duration: 0.3, ease: "easeInOut" } },
        collapsed: { width: 80, transition: { duration: 0.3, ease: "easeInOut" } }
    }

    return (
        <>
            {/* Mobile overlay - simplified for now, assuming mainly desktop/web focus as per prompt */}
            <AnimatePresence>
                {!collapsed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-20 md:hidden"
                        onClick={() => setCollapsed(true)}
                    />
                )}
            </AnimatePresence>

            <motion.aside
                initial={false}
                animate={collapsed ? "collapsed" : "expanded"}
                variants={sidebarVariants}
                className="fixed top-0 left-0 h-full z-30 flex flex-col bg-white border-r border-slate-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
            >
                {/* Brand logo */}
                <div className="flex items-center h-16 px-5 border-b border-slate-50 flex-shrink-0">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 flex-shrink-0">
                            <span className="text-white font-black text-sm tracking-wider">W</span>
                        </div>
                        {!collapsed && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex flex-col whitespace-nowrap"
                            >
                                <span className="text-[#0F172A] font-extrabold text-base tracking-tight leading-none">WorkPilot</span>
                                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-0.5">Premium ERP</p>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* User info */}
                <div className={`px-4 py-6 flex-shrink-0 ${collapsed ? 'flex justify-center' : ''}`}>
                    <div className={`flex items-center gap-3 ${collapsed ? 'flex-col' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold text-sm">
                                {user?.name?.charAt(0) || 'U'}
                            </span>
                        </div>
                        {!collapsed && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="min-w-0"
                            >
                                <p className="text-[#0F172A] text-sm font-bold truncate">{user?.name || 'User Name'}</p>
                                <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold mt-1 ${ROLE_BADGE_CLASS[role] || 'bg-slate-50 text-slate-500'}`}>
                                    {role}
                                </span>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Nav items */}
                <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-hide">
                    {filteredNav.map(item => {
                        const Icon = item.icon
                        return (
                            <NavLink
                                key={item.id}
                                to={item.navLink}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group
                                    ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'
                                    } ${collapsed ? 'justify-center' : ''}`
                                }
                                title={collapsed ? item.title : ''}
                            >
                                <Icon size={18} className="flex-shrink-0" />
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-sm font-semibold truncate"
                                    >
                                        {item.title}
                                    </motion.span>
                                )}
                            </NavLink>
                        )
                    })}
                </nav>

                {/* Footer Controls */}
                <div className="p-3 border-t border-slate-50 space-y-1">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all group"
                    >
                        {collapsed ? <ChevronRight size={18} className="mx-auto" /> : (
                            <>
                                <ChevronLeft size={18} />
                                <span className="text-sm font-semibold">Collapse</span>
                            </>
                        )}
                    </button>

                    <button
                        onClick={handleLogout}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-50 hover:text-red-600 transition-all group ${collapsed ? 'justify-center' : ''}`}
                    >
                        <LogOut size={18} className="flex-shrink-0" />
                        {!collapsed && <span className="text-sm font-semibold">Logout</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Sidebar width placeholder so content shifts */}
            <motion.div
                initial={false}
                animate={{ width: collapsed ? 80 : 256 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0 hidden md:block"
            />
        </>
    )
}

export default Sidebar
