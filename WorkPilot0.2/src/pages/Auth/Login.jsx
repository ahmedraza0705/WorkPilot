import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../store/authSlice'

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
    { email: 'superadmin@sura.com', role: 'Super Admin', icon: '👑', color: '#ef4444', bg: 'rgba(239,68,68,0.08)' },
    { email: 'admin@sura.com', role: 'Admin', icon: '🛡️', color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)' },
    { email: 'leader@sura.com', role: 'Team Leader', icon: '⭐', color: '#3b82f6', bg: 'rgba(59,130,246,0.08)' },
    { email: 'bdm@sura.com', role: 'BDM', icon: '📈', color: '#10b981', bg: 'rgba(16,185,129,0.08)' },
    { email: 'recruiter@sura.com', role: 'Recruiter', icon: '🔍', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
    { email: 'client@sura.com', role: 'Client', icon: '💼', color: '#f97316', bg: 'rgba(249,115,22,0.08)' },
    { email: 'candidate@sura.com', role: 'Candidate', icon: '🎯', color: '#06b6d4', bg: 'rgba(6,182,212,0.08)' },
]

/* ── Inline styles ──────────────────────────────────────── */
const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a4e 40%, #24243e 100%)',
        fontFamily: "'Inter', system-ui, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        padding: '1rem',
    },
    orb1: {
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
        top: '-150px',
        left: '-100px',
        pointerEvents: 'none',
        animation: 'orbFloat 8s ease-in-out infinite',
    },
    orb2: {
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)',
        bottom: '-120px',
        right: '-80px',
        pointerEvents: 'none',
        animation: 'orbFloat 10s ease-in-out infinite reverse',
    },
    orb3: {
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        top: '50%',
        left: '60%',
        pointerEvents: 'none',
        animation: 'orbFloat 12s ease-in-out infinite',
    },
    gridLines: {
        position: 'absolute',
        inset: 0,
        backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
    },
    wrapper: {
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '460px',
    },
    /* Logo area */
    logoRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '2rem',
        justifyContent: 'center',
    },
    logoBox: {
        width: '52px',
        height: '52px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(99,102,241,0.45)',
        flexShrink: 0,
    },
    logoLetter: {
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '0.05em',
    },
    brandText: {
        color: '#fff',
        fontSize: '1.6rem',
        fontWeight: 800,
        letterSpacing: '0.15em',
        lineHeight: 1,
    },
    brandSub: {
        color: 'rgba(255,255,255,0.45)',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginTop: '2px',
    },
    /* Glass card */
    card: {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '24px',
        padding: '2.5rem',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
    },
    heading: {
        fontSize: '1.75rem',
        fontWeight: 800,
        color: '#fff',
        marginBottom: '4px',
        letterSpacing: '-0.02em',
    },
    subHeading: {
        color: 'rgba(255,255,255,0.45)',
        fontSize: '0.875rem',
        marginBottom: '2rem',
    },
    label: {
        display: 'block',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.8rem',
        fontWeight: 600,
        marginBottom: '8px',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
    },
    inputWrap: {
        position: 'relative',
        marginBottom: '1.25rem',
    },
    inputIcon: {
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'rgba(255,255,255,0.35)',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '14px',
        padding: '0.875rem 3rem 0.875rem 3rem',
        color: '#fff',
        fontSize: '0.9rem',
        outline: 'none',
        transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
        boxSizing: 'border-box',
    },
    eyeBtn: {
        position: 'absolute',
        right: '14px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'rgba(255,255,255,0.4)',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.2s',
    },
    errorBox: {
        background: 'rgba(239,68,68,0.12)',
        border: '1px solid rgba(239,68,68,0.3)',
        borderRadius: '12px',
        padding: '0.75rem 1rem',
        color: '#fca5a5',
        fontSize: '0.85rem',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    submitBtn: {
        width: '100%',
        padding: '0.9rem',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        border: 'none',
        borderRadius: '14px',
        color: '#fff',
        fontWeight: 700,
        fontSize: '1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        boxShadow: '0 8px 24px rgba(99,102,241,0.4)',
        transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.2s',
        letterSpacing: '0.02em',
        marginTop: '0.5rem',
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        margin: '1.75rem 0 1.25rem',
    },
    dividerLine: {
        flex: 1,
        height: '1px',
        background: 'rgba(255,255,255,0.08)',
    },
    dividerText: {
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
    },
    demoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
    },
    demoBtn: {
        border: 'none',
        borderRadius: '12px',
        padding: '0.6rem 0.75rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.78rem',
        fontWeight: 600,
        transition: 'transform 0.18s, opacity 0.18s',
    },
    demoBtnIcon: {
        fontSize: '1rem',
        lineHeight: 1,
        flexShrink: 0,
    },
    /* Stats row */
    statsRow: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '2rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
    },
    statItem: {
        textAlign: 'center',
    },
    statNum: {
        color: '#a5b4fc',
        fontSize: '1.1rem',
        fontWeight: 800,
    },
    statLabel: {
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.68rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginTop: '2px',
    },
}

/* ── Icons ────────────────────────────────────────────────── */
const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
)

const LockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
)

const EyeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)

const EyeOffIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
)

const ShieldIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
)

const AlertIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
)

/* ── Component ────────────────────────────────────────────── */
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error } = useSelector(state => state.auth)

    const [form, setForm] = useState({ email: '', password: '' })
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const [focusedField, setFocusedField] = useState(null)
    const [btnHover, setBtnHover] = useState(false)
    const [activeDemo, setActiveDemo] = useState(null)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        await new Promise(r => setTimeout(r, 800))
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

    const quickLogin = (email, idx) => {
        setActiveDemo(idx)
        setForm({ email, password: 'password' })
        setTimeout(() => setActiveDemo(null), 600)
    }

    const inputStyle = (field) => ({
        ...styles.input,
        borderColor: focusedField === field ? 'rgba(99,102,241,0.7)' : 'rgba(255,255,255,0.12)',
        boxShadow: focusedField === field ? '0 0 0 3px rgba(99,102,241,0.18)' : 'none',
        background: focusedField === field ? 'rgba(99,102,241,0.07)' : 'rgba(255,255,255,0.06)',
    })

    return (
        <>
            {/* CSS keyframes injected once */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                @keyframes orbFloat {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-30px) scale(1.04); }
                }
                @keyframes cardIn {
                    from { opacity: 0; transform: translateY(24px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0)   scale(1); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                .login-card-animated { animation: cardIn 0.55s cubic-bezier(0.22,1,0.36,1) both; }
                .login-input::placeholder { color: rgba(255,255,255,0.2); }
                .login-input:-webkit-autofill {
                    -webkit-text-fill-color: #fff !important;
                    -webkit-box-shadow: 0 0 0 1000px rgba(99,102,241,0.07) inset !important;
                    caret-color: #fff;
                }
                .demo-pill:hover { transform: scale(1.03); opacity: 0.9; }
                .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(99,102,241,0.55) !important; }
                .submit-btn:active:not(:disabled) { transform: translateY(0); }
                .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }
                .eye-btn:hover { color: rgba(255,255,255,0.8) !important; }
            `}</style>

            <div style={styles.page}>
                {/* Background decoration */}
                <div style={styles.orb1} />
                <div style={styles.orb2} />
                <div style={styles.orb3} />
                <div style={styles.gridLines} />

                <div style={styles.wrapper}>
                    {/* Logo */}
                    <div style={styles.logoRow}>
                        <div style={styles.logoBox}>
                            <span style={styles.logoLetter}>W</span>
                        </div>
                        <div>
                            <div style={styles.brandText}>WorkPilot</div>
                            <div style={styles.brandSub}>Unique World Platform</div>
                        </div>
                    </div>

                    {/* Card */}
                    <div style={styles.card} className="login-card-animated">
                        <div style={styles.heading}>Welcome back 👋</div>
                        <div style={styles.subHeading}>Sign in to your account to continue</div>

                        <form onSubmit={handleSubmit}>
                            {/* Email */}
                            <label style={styles.label}>Email Address</label>
                            <div style={styles.inputWrap}>
                                <span style={styles.inputIcon}><MailIcon /></span>
                                <input
                                    className="login-input"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="you@example.com"
                                    required
                                    style={inputStyle('email')}
                                />
                            </div>

                            {/* Password */}
                            <label style={styles.label}>Password</label>
                            <div style={styles.inputWrap}>
                                <span style={styles.inputIcon}><LockIcon /></span>
                                <input
                                    className="login-input"
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('password')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="••••••••"
                                    required
                                    style={inputStyle('password')}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(s => !s)}
                                    style={styles.eyeBtn}
                                    className="eye-btn"
                                >
                                    {showPass ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                            </div>

                            {/* Error */}
                            {error && (
                                <div style={styles.errorBox}>
                                    <AlertIcon />
                                    {error}
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    ...styles.submitBtn,
                                    boxShadow: btnHover ? '0 12px 32px rgba(99,102,241,0.55)' : '0 8px 24px rgba(99,102,241,0.4)',
                                    transform: btnHover ? 'translateY(-2px)' : 'translateY(0)',
                                }}
                                className="submit-btn"
                                onMouseEnter={() => setBtnHover(true)}
                                onMouseLeave={() => setBtnHover(false)}
                            >
                                {loading ? (
                                    <>
                                        <svg style={{ animation: 'spin 0.8s linear infinite' }} width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
                                            <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                        Signing in…
                                    </>
                                ) : (
                                    <>
                                        <ShieldIcon />
                                        Sign In
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Demo credentials */}
                        <div style={styles.divider}>
                            <div style={styles.dividerLine} />
                            <span style={styles.dividerText}>Quick demo login · password: <strong style={{ color: 'rgba(255,255,255,0.5)' }}>password</strong></span>
                            <div style={styles.dividerLine} />
                        </div>

                        <div style={styles.demoGrid}>
                            {DEMO_CREDENTIALS.map((c, idx) => (
                                <button
                                    key={c.email}
                                    type="button"
                                    onClick={() => quickLogin(c.email, idx)}
                                    className="demo-pill"
                                    style={{
                                        ...styles.demoBtn,
                                        background: activeDemo === idx ? c.color + '22' : c.bg,
                                        border: `1px solid ${c.color}28`,
                                        color: c.color,
                                        transform: activeDemo === idx ? 'scale(1.05)' : 'scale(1)',
                                    }}
                                >
                                    <span style={styles.demoBtnIcon}>{c.icon}</span>
                                    {c.role}
                                </button>
                            ))}
                        </div>

                        {/* Stats */}
                        <div style={styles.statsRow}>
                            {[['7', 'Roles'], ['18+', 'Modules'], ['100%', 'Secure']].map(([n, l]) => (
                                <div key={l} style={styles.statItem}>
                                    <div style={styles.statNum}>{n}</div>
                                    <div style={styles.statLabel}>{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
