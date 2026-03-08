import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { X, LogOut, ChevronRight, Shield } from 'react-feather'
import { logout } from '../../store/authSlice'
import { superAdminNavConfig } from '../../navigation'

const SuperAdminSidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <>
            <aside
                className={`
          fixed top-0 left-0 h-full z-30 flex flex-col
          bg-slate-900 shadow-sidebar transition-all duration-300
          ${collapsed ? 'w-0 overflow-hidden md:w-20' : 'w-64'}
        `}
            >
                {/* Brand */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-white/10 flex-shrink-0">
                    {!collapsed && (
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Shield size={16} className="text-white" />
                            </div>
                            <div>
                                <span className="text-white font-extrabold text-lg tracking-widest">SURA</span>
                                <p className="text-slate-400 text-[10px] -mt-1">Super Admin Panel</p>
                            </div>
                        </div>
                    )}
                    {collapsed && (
                        <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center mx-auto">
                            <Shield size={16} className="text-white" />
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
                    <div className="px-5 py-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-red-500/30 flex items-center justify-center">
                                <span className="text-red-300 font-semibold text-sm">
                                    {user?.name?.charAt(0) || 'S'}
                                </span>
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold">{user?.name}</p>
                                <span className="badge badge-superadmin text-[10px]">SuperAdmin</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Nav */}
                <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                    {superAdminNavConfig.map(item => {
                        const Icon = item.icon
                        return (
                            <NavLink
                                key={item.id}
                                to={item.navLink}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'bg-red-600 text-white shadow-lg' : ''} ${collapsed ? 'justify-center px-2' : ''}`
                                }
                                title={collapsed ? item.title : ''}
                            >
                                <Icon size={18} className="flex-shrink-0" />
                                {!collapsed && <span className="truncate">{item.title}</span>}
                            </NavLink>
                        )
                    })}
                </nav>

                <div className="px-3 py-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className={`nav-link w-full text-red-400 hover:bg-red-900/30 ${collapsed ? 'justify-center px-2' : ''}`}
                    >
                        <LogOut size={18} />
                        {!collapsed && <span>Logout</span>}
                    </button>
                </div>
            </aside>
            <div className={`flex-shrink-0 transition-all duration-300 ${collapsed ? 'w-0 md:w-20' : 'w-64'}`} />
        </>
    )
}

export default SuperAdminSidebar
