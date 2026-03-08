import {
    Home, Users, Briefcase, FileText, MessageSquare, Target,
    Globe, Grid, DollarSign, Zap, Search, Star, ShoppingBag,
    BookOpen, Tag, Layers, UserCheck, Heart, CreditCard
} from 'react-feather'

// ─── Internal Roles Navigation (Admin, TeamLeader, BDM, Recruiter, Candidate) ───
export const navConfig = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: Home,
        navLink: '/dashboard',
        permission: ['Admin', 'TeamLeader', 'BDM', 'Recruiter', 'Candidate'],
    },
    {
        id: 'candidate',
        title: 'Candidate Management',
        icon: Users,
        navLink: '/candidate',
        permission: ['Admin', 'TeamLeader', 'BDM', 'Recruiter'],
    },
    {
        id: 'onboarding',
        title: 'Onboarding',
        icon: UserCheck,
        navLink: '/onboarding',
        permission: ['Admin', 'TeamLeader', 'BDM', 'Recruiter'],
    },
    {
        id: 'interview',
        title: 'Interview Tracking',
        icon: Briefcase,
        navLink: '/interview',
        permission: ['Admin', 'TeamLeader', 'BDM', 'Recruiter'],
    },
    {
        id: 'clientFeedback',
        title: 'Client Feedback',
        icon: MessageSquare,
        navLink: '/clientFeedback',
        permission: ['Admin', 'TeamLeader', 'BDM'],
    },
    {
        id: 'lead',
        title: 'Leads',
        icon: Target,
        navLink: '/lead',
        permission: ['Admin', 'BDM'],
    },
    {
        id: 'clients',
        title: 'Clients Directory',
        icon: Grid,
        navLink: '/clients',
        permission: ['Admin', 'BDM'],
    },
    {
        id: 'users',
        title: 'Users Management',
        icon: Users,
        navLink: '/users',
        permission: ['Admin'],
    },
    {
        id: 'transactionlist',
        title: 'Transaction List',
        icon: DollarSign,
        navLink: '/transactionlist',
        permission: ['Admin'],
    },
    {
        id: 'hot-vacancy',
        title: 'Hot Vacancy',
        icon: Zap,
        navLink: '/hot-vacancy',
        permission: ['Admin'],
    },
    {
        id: 'resume',
        title: 'Resume Inquiry',
        icon: FileText,
        navLink: '/resume',
        permission: ['Admin'],
    },
    // ── Candidate role exclusive ──
    {
        id: 'jobmatches',
        title: 'Job Matches',
        icon: Heart,
        navLink: '/jobmatches',
        permission: ['Candidate'],
    },
    // ── Client role exclusive ──
    {
        id: 'jobopening',
        title: 'Job Openings',
        icon: Briefcase,
        navLink: '/jobopening',
        permission: ['Client'],
    },
    {
        id: 'best-matches',
        title: 'Best Matches',
        icon: Star,
        navLink: '/best-matches',
        permission: ['Client'],
    },
    {
        id: 'client-candidate',
        title: 'Candidate Search',
        icon: Search,
        navLink: '/candidate',
        permission: ['Client'],
    },
    {
        id: 'hire',
        title: 'Hired Candidates',
        icon: UserCheck,
        navLink: '/hire',
        permission: ['Client'],
    },
    {
        id: 'documentation',
        title: 'HR Documentation',
        icon: BookOpen,
        navLink: '/documentation',
        permission: ['Client'],
    },
    {
        id: 'saved-candidates',
        title: 'Saved Candidates',
        icon: Heart,
        navLink: '/saved-candidates',
        permission: ['Client'],
    },
    {
        id: 'pricing',
        title: 'Pricing Plans',
        icon: CreditCard,
        navLink: '/pricing',
        permission: ['Client'],
    },
]

// ─── SuperAdmin Navigation ───────────────────────────────────────────────────
export const superAdminNavConfig = [
    {
        id: 'sa-dashboard',
        title: 'Dashboard',
        icon: Home,
        navLink: '/superadmin/dashboard',
        permission: ['SuperAdmin'],
    },
    {
        id: 'sa-agency',
        title: 'Agency Management',
        icon: Globe,
        navLink: '/superadmin/agency',
        permission: ['SuperAdmin'],
    },
    {
        id: 'sa-transactionlist',
        title: 'Transaction List',
        icon: DollarSign,
        navLink: '/superadmin/transactionlist',
        permission: ['SuperAdmin'],
    },
    {
        id: 'sa-jobCategory',
        title: 'Job Category',
        icon: Tag,
        navLink: '/superadmin/jobCategory',
        permission: ['SuperAdmin'],
    },
    {
        id: 'sa-industries',
        title: 'Industries',
        icon: Layers,
        navLink: '/superadmin/industries',
        permission: ['SuperAdmin'],
    },
]
