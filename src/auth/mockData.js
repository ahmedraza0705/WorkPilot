export const MOCK_USERS = {
    'superadmin@test.com': {
        id: 'mock-superadmin-id',
        email: 'superadmin@test.com',
        role: { name: 'SuperAdmin' },
        agency: { id: 'mock-agency-id', slug: 'super-agency', themecolor: '#323D76' },
        fullName: 'Mock SuperAdmin'
    },
    'admin@test.com': {
        id: 'mock-admin-id',
        email: 'admin@test.com',
        role: { name: 'Admin' },
        agency: { id: 'mock-agency-id', slug: 'demo-agency', themecolor: '#105996' },
        fullName: 'Mock Admin'
    },
    'teamleader@test.com': {
        id: 'mock-tl-id',
        email: 'teamleader@test.com',
        role: { name: 'Team Leader' },
        agency: { id: 'mock-agency-id', slug: 'demo-agency', themecolor: '#105996' },
        fullName: 'Mock Team Leader'
    },
    'bdm@test.com': {
        id: 'mock-bdm-id',
        email: 'bdm@test.com',
        role: { name: 'BDM' },
        agency: { id: 'mock-agency-id', slug: 'demo-agency', themecolor: '#105996' },
        fullName: 'Mock BDM'
    },
    'recruiter@test.com': {
        id: 'mock-recruiter-id',
        email: 'recruiter@test.com',
        role: { name: 'Recruiter' },
        agency: { id: 'mock-agency-id', slug: 'demo-agency', themecolor: '#105996' },
        fullName: 'Mock Recruiter'
    },
    'candidate@test.com': {
        id: 'mock-candidate-id',
        email: 'candidate@test.com',
        role: { name: 'Candidate' },
        agency: { id: 'mock-agency-id', slug: 'demo-agency', themecolor: '#105996' },
        fullName: 'Mock Candidate'
    },
    'client@test.com': {
        id: 'mock-client-id',
        email: 'client@test.com',
        role: { name: 'Client' },
        agency: { id: 'mock-agency-id', slug: 'demo-agency', themecolor: '#105996' },
        fullName: 'Mock Client'
    }
};

export const MOCK_TOKEN = 'mock-jwt-token-for-testing';
