import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { loginUser } from '../../store/authSlice'
import { Mail, Lock, Eye, EyeOff, Shield, AlertCircle, ArrowRight } from 'react-feather'

const ROLE_HOME = {
    SuperAdmin: '/superadmin/dashboard',
    Admin: '/dashboard',
    TeamLeader: '/dashboard',
    BDM: '/dashboard',
    Recruiter: '/dashboard',
    Client: '/jobopening',
    Candidate: '/dashboard',
}

const DEMO_CREDENTIALS = [
    { email: 'superadmin@sura.com', role: 'Super Admin', icon: '👑', color: '#ef4444' },
    { email: 'admin@sura.com', role: 'Admin', icon: '🛡️', color: '#8b5cf6' },
    { email: 'leader@sura.com', role: 'Team Leader', icon: '⭐', color: '#3b82f6' },
    { email: 'bdm@sura.com', role: 'BDM', icon: '📈', color: '#10b981' },
    { email: 'recruiter@sura.com', role: 'Recruiter', icon: '🔍', color: '#f59e0b' },
    { email: 'client@sura.com', role: 'Client', icon: '💼', color: '#f97316' },
    { email: 'candidate@sura.com', role: 'Candidate', icon: '🎯', color: '#06b6d4' },
]

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error } = useSelector(state => state.auth)

    const [form, setForm] = useState({ email: '', password: '' })
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        await new Promise(r => setTimeout(r, 1200)) // Simulation delay
        dispatch(loginUser(form))
        setLoading(false)
        setTimeout(() => {
            const stored = localStorage.getItem('sura_auth')
            if (stored) {
                const { role } = JSON.parse(stored)
                navigate(ROLE_HOME[role] || '/dashboard')
            }
        }, 100)
    }

    const quickLogin = (email) => {
        setForm({ email, password: 'password' })
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-['Inter'] selection:bg-blue-100">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[440px]"
            >
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200 mb-4"
                    >
                        <span className="text-white text-2xl font-black tracking-wider">W</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-extrabold text-[#0F172A] tracking-tight"
                    >
                        WorkPilot
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em] mt-1"
                    >
                        Unique World Platform
                    </motion.p>
                </div>

                {/* Main Auth Card */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Welcome Back</h2>
                        <p className="text-slate-500 text-sm">Please enter your credentials to access your account.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-500">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="name@company.com"
                                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 text-sm font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-500">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="••••••••"
                                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-12 text-sm font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-slate-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-red-50 border border-red-100 rounded-xl p-3 flex items-center gap-3"
                                >
                                    <AlertCircle size={18} className="text-red-500 shrink-0" />
                                    <p className="text-red-600 text-xs font-medium">{error}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transition-colors overflow-hidden relative"
                        >
                            {loading ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Quick Access */}
                    <div className="mt-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-px bg-slate-100 flex-1" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quick Demo Access</span>
                            <div className="h-px bg-slate-100 flex-1" />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            {DEMO_CREDENTIALS.map((c) => (
                                <button
                                    key={c.email}
                                    onClick={() => quickLogin(c.email)}
                                    className="flex items-center gap-2.5 p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-left group"
                                >
                                    <span className="text-base grayscale group-hover:grayscale-0 transition-all">{c.icon}</span>
                                    <span className="text-[11px] font-bold text-slate-600 truncate">{c.role}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Footer */}
                <p className="mt-8 text-center text-slate-400 text-xs font-medium">
                    &copy; {new Date().getFullYear()} WorkPilot. Professional Management Excellence.
                </p>
            </motion.div>
        </div>
    )
}

export default Login
