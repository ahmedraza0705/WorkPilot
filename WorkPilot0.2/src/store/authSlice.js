import { createSlice } from '@reduxjs/toolkit'

const MOCK_USERS = [
    { id: 1, email: 'superadmin@sura.com', password: 'password', name: 'Super Admin', role: 'SuperAdmin' },
    { id: 2, email: 'admin@sura.com', password: 'password', name: 'Alex Admin', role: 'Admin' },
    { id: 3, email: 'leader@sura.com', password: 'password', name: 'Lisa Leader', role: 'TeamLeader' },
    { id: 4, email: 'bdm@sura.com', password: 'password', name: 'Brian BDM', role: 'BDM' },
    { id: 5, email: 'recruiter@sura.com', password: 'password', name: 'Rachel Rec', role: 'Recruiter' },
    { id: 6, email: 'client@sura.com', password: 'password', name: 'Carol Client', role: 'Client' },
    { id: 7, email: 'candidate@sura.com', password: 'password', name: 'Chris Cand', role: 'Candidate' },
]

const getInitialState = () => {
    try {
        const stored = localStorage.getItem('sura_auth')
        if (stored) return JSON.parse(stored)
    } catch (_) { }
    return { user: null, role: null, isLoggedIn: false, error: null }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialState(),
    reducers: {
        loginUser: (state, action) => {
            const { email, password } = action.payload
            const found = MOCK_USERS.find(u => u.email === email && u.password === password)
            if (found) {
                state.user = { id: found.id, name: found.name, email: found.email }
                state.role = found.role
                state.isLoggedIn = true
                state.error = null
                localStorage.setItem('sura_auth', JSON.stringify({
                    user: state.user, role: state.role, isLoggedIn: true, error: null
                }))
            } else {
                state.error = 'Invalid email or password.'
            }
        },
        logout: (state) => {
            state.user = null
            state.role = null
            state.isLoggedIn = false
            state.error = null
            localStorage.removeItem('sura_auth')
        },
        clearError: (state) => {
            state.error = null
        }
    }
})

export const { loginUser, logout, clearError } = authSlice.actions
export default authSlice.reducer
