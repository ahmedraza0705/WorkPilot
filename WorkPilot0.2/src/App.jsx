import { Routes, Route, Navigate } from 'react-router-dom'

// Route Guards
import PrivateRoute from './router/PrivateRoute'
import PublicRoute from './router/PublicRoute'
import RoleRoute from './router/RoleRoute'

// Layouts
import Layout from './components/layout/Layout'
import SuperAdminLayout from './components/layout/SuperAdminLayout'

// Auth
import Login from './pages/Auth/Login'

// SuperAdmin Pages
import SADashboard from './pages/SuperAdmin/Dashboard'
import Agency from './pages/SuperAdmin/Agency'
import SATransactionList from './pages/SuperAdmin/TransactionList'
import JobCategory from './pages/SuperAdmin/JobCategory'
import Industries from './pages/SuperAdmin/Industries'

// Internal Pages (Admin / TeamLeader / BDM / Recruiter / Candidate)
import Dashboard from './pages/Internal/Dashboard'
import Candidate from './pages/Internal/Candidate'
import Onboarding from './pages/Internal/Onboarding'
import Interview from './pages/Internal/Interview'
import ClientFeedback from './pages/Internal/ClientFeedback'
import Leads from './pages/Internal/Leads'
import Clients from './pages/Internal/Clients'
import UsersManagement from './pages/Internal/UsersManagement'
import TransactionList from './pages/Internal/TransactionList'
import HotVacancy from './pages/Internal/HotVacancy'
import ResumeInquiry from './pages/Internal/ResumeInquiry'

// Candidate Pages
import JobMatches from './pages/Candidate/JobMatches'

// Client Pages
import JobOpening from './pages/Client/JobOpening'
import BestMatches from './pages/Client/BestMatches'
import ClientCandidate from './pages/Client/ClientCandidate'
import Hire from './pages/Client/Hire'
import Documentation from './pages/Client/Documentation'
import SavedCandidates from './pages/Client/SavedCandidates'
import Pricing from './pages/Client/Pricing'

// Error Pages
import Unauthorized from './pages/errors/Unauthorized'
import NotFound from './pages/errors/NotFound'

const INTERNAL_ROLES = ['Admin', 'TeamLeader', 'BDM', 'Recruiter', 'Candidate']

function App() {
  return (
    <Routes>
      {/* ── Public Routes ─────────────────────────────────── */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* ── SuperAdmin Routes ─────────────────────────────── */}
      <Route element={<PrivateRoute />}>
        <Route element={<RoleRoute allowedRoles={['SuperAdmin']} />}>
          <Route element={<SuperAdminLayout />}>
            <Route path="/superadmin/dashboard" element={<SADashboard />} />
            <Route path="/superadmin/agency" element={<Agency />} />
            <Route path="/superadmin/transactionlist" element={<SATransactionList />} />
            <Route path="/superadmin/jobCategory" element={<JobCategory />} />
            <Route path="/superadmin/industries" element={<Industries />} />
          </Route>
        </Route>

        {/* ── Internal + Client + Candidate Routes (shared layout) ─ */}
        <Route element={<Layout />}>
          {/* Dashboard – for all except SuperAdmin and Client */}
          <Route element={<RoleRoute allowedRoles={INTERNAL_ROLES} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Candidate Management – Admin, TeamLeader, BDM, Recruiter */}
          <Route element={<RoleRoute allowedRoles={['Admin', 'TeamLeader', 'BDM', 'Recruiter']} />}>
            <Route path="/candidate" element={<Candidate />} />
          </Route>

          {/* Onboarding – Admin, TeamLeader, BDM, Recruiter */}
          <Route element={<RoleRoute allowedRoles={['Admin', 'TeamLeader', 'BDM', 'Recruiter']} />}>
            <Route path="/onboarding" element={<Onboarding />} />
          </Route>

          {/* Interview – Admin, TeamLeader, BDM, Recruiter */}
          <Route element={<RoleRoute allowedRoles={['Admin', 'TeamLeader', 'BDM', 'Recruiter']} />}>
            <Route path="/interview" element={<Interview />} />
          </Route>

          {/* Client Feedback – Admin, TeamLeader, BDM */}
          <Route element={<RoleRoute allowedRoles={['Admin', 'TeamLeader', 'BDM']} />}>
            <Route path="/clientFeedback" element={<ClientFeedback />} />
          </Route>

          {/* Leads – Admin, BDM */}
          <Route element={<RoleRoute allowedRoles={['Admin', 'BDM']} />}>
            <Route path="/lead" element={<Leads />} />
          </Route>

          {/* Clients Directory – Admin, BDM */}
          <Route element={<RoleRoute allowedRoles={['Admin', 'BDM']} />}>
            <Route path="/clients" element={<Clients />} />
          </Route>

          {/* Users Management – Admin only */}
          <Route element={<RoleRoute allowedRoles={['Admin']} />}>
            <Route path="/users" element={<UsersManagement />} />
          </Route>

          {/* Transaction List – Admin only */}
          <Route element={<RoleRoute allowedRoles={['Admin']} />}>
            <Route path="/transactionlist" element={<TransactionList />} />
          </Route>

          {/* Hot Vacancy – Admin only */}
          <Route element={<RoleRoute allowedRoles={['Admin']} />}>
            <Route path="/hot-vacancy" element={<HotVacancy />} />
          </Route>

          {/* Resume Inquiry – Admin only */}
          <Route element={<RoleRoute allowedRoles={['Admin']} />}>
            <Route path="/resume" element={<ResumeInquiry />} />
          </Route>

          {/* Candidate-exclusive */}
          <Route element={<RoleRoute allowedRoles={['Candidate']} />}>
            <Route path="/jobmatches" element={<JobMatches />} />
          </Route>

          {/* ── Client-exclusive Routes ── */}
          <Route element={<RoleRoute allowedRoles={['Client']} />}>
            <Route path="/jobopening" element={<JobOpening />} />
            <Route path="/best-matches" element={<BestMatches />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/saved-candidates" element={<SavedCandidates />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>

          {/* Client candidate search shares /candidate path but different component */}
          <Route element={<RoleRoute allowedRoles={['Client']} />}>
            <Route path="/client-candidate" element={<ClientCandidate />} />
          </Route>
        </Route>
      </Route>

      {/* ── Error Routes ──────────────────────────────────── */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
