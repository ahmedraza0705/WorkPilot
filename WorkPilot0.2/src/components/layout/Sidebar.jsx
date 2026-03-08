import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, X, LogOut, ChevronRight } from 'react-feather'
import { logout } from '../../store/authSlice'
import { navConfig } from '../../navigation'

const ROLE_BADGE_CLASS = {
    Admin: 'badge-admin',
    TeamLeader: 'badge-teamleader',
    BDM: 'badge-bdm',
    Recruiter: 'badge-recruiter',
    Client: 'badge-client',
    Candidate: 'badge-candidate',
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

    return (
        <>
            {/* Mobile overlay */}
            {!collapsed && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 md:hidden"
                    onClick={() => setCollapsed(true)}
                />
            )}

            <aside
                className={`
          fixed top-0 left-0 h-full z-30 flex flex-col
          bg-sidebar shadow-sidebar transition-all duration-300
          ${collapsed ? 'w-0 overflow-hidden md:w-20' : 'w-64'}
        `}
            >
                {/* Brand logo */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-white/10 flex-shrink-0">
                    {!collapsed && (
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-extrabold text-sm tracking-wider">S</span>
                            </div>
                            <div>
                                <span className="text-white font-extrabold text-lg tracking-widest">SURA</span>
                                <p className="text-slate-400 text-[10px] -mt-1">Unique World</p>
                            </div>
                        </div>
                    )}
                    {collapsed && (
                        <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                            <span className="text-white font-extrabold text-sm">S</span>
                        </div>
                    )}
                    <button
                        onClick={() => setCollapsed(c => !c)}
                        className="text-slate-400 hover:text-white transition-colors hidden md:block ml-auto"
                    >
                        {collapsed ? <ChevronRight size={18} /> : <X size={18} />}
                    </button>
                </div>

                {/* User info */}
                {!collapsed && (
                    <div className="px-5 py-4 border-b border-white/10 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-primary-500/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary-300 font-semibold text-sm">
                                    {user?.name?.charAt(0) || 'U'}
                                </span>
                            </div>
                            <div className="min-w-0">
                                <p className="text-white text-sm font-semibold truncate">{user?.name}</p>
                                <span className={`${ROLE_BADGE_CLASS[role] || 'badge'} text-[10px]`}>{role}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Nav items */}
                <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                    {filteredNav.map(item => {
                        const Icon = item.icon
                        return (
                            <NavLink
                                key={item.id}
                                to={item.navLink}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''} ${collapsed ? 'justify-center px-2' : ''}`
                                }
                                title={collapsed ? item.title : ''}
                            >
                                <Icon size={18} className="flex-shrink-0" />
                                {!collapsed && <span className="truncate">{item.title}</span>}
                            </NavLink>
                        )
                    })}
                </nav>

                {/* Logout */}
                <div className="px-3 py-4 border-t border-white/10 flex-shrink-0">
                    <button
                        onClick={handleLogout}
                        className={`nav-link w-full text-red-400 hover:text-red-300 hover:bg-red-900/30 ${collapsed ? 'justify-center px-2' : ''}`}
                    >
                        <LogOut size={18} className="flex-shrink-0" />
                        {!collapsed && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Sidebar width placeholder so content shifts */}
            <div className={`flex-shrink-0 transition-all duration-300 ${collapsed ? 'w-0 md:w-20' : 'w-64'}`} />
        </>
    )
}

export default Sidebar
