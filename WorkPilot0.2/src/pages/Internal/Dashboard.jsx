import { Home, Users, Briefcase, FileText, DollarSign } from 'react-feather'
import { PageHeader, StatCard, TableStub } from '../../components/ui/PageHelpers'
import { useSelector } from 'react-redux'

const ROLE_STATS = {
    Admin: { color: 'bg-purple-100 text-purple-600', label: 'Admin Overview' },
    TeamLeader: { color: 'bg-blue-100 text-blue-600', label: 'Team Dashboard' },
    BDM: { color: 'bg-green-100 text-green-600', label: 'BDM Dashboard' },
    Recruiter: { color: 'bg-yellow-100 text-yellow-700', label: 'Recruiter Dashboard' },
    Candidate: { color: 'bg-teal-100 text-teal-600', label: 'Candidate Dashboard' },
}

const Dashboard = () => {
    const { role } = useSelector(s => s.auth)
    const meta = ROLE_STATS[role] || ROLE_STATS.Admin

    return (
        <div>
            <PageHeader title={meta.label} subtitle={`Welcome! Here's your overview for today.`} icon={Home} color={meta.color} />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <StatCard title="Total Candidates" value="1,248" icon={Users} color="bg-blue-100 text-blue-600" change="+28 this week" />
                <StatCard title="Active Jobs" value="84" icon={Briefcase} color="bg-purple-100 text-purple-600" change="+5 today" />
                <StatCard title="Interviews Today" value="12" icon={FileText} color="bg-orange-100 text-orange-600" />
                <StatCard title="Placements (Month)" value="37" icon={DollarSign} color="bg-green-100 text-green-600" change="+3 vs last month" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                <div className="card">
                    <h3 className="font-semibold text-slate-700 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                        {['New candidate John Doe added', 'Interview scheduled with TechCorp', 'Onboarding completed for Jane Smith'].map((a, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-600 py-2 border-b border-slate-100 last:border-0">
                                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                                {a}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card">
                    <h3 className="font-semibold text-slate-700 mb-4">Upcoming Interviews</h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Alice Johnson', company: 'TechCorp Inc.', time: '10:00 AM' },
                            { name: 'Bob Williams', company: 'DataFlow Ltd', time: '2:00 PM' },
                            { name: 'Carol Davis', company: 'InnovateSoft', time: '4:30 PM' },
                        ].map((iv, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                                <div>
                                    <p className="text-sm font-semibold text-slate-700">{iv.name}</p>
                                    <p className="text-xs text-slate-400">{iv.company}</p>
                                </div>
                                <span className="badge bg-primary-100 text-primary-700">{iv.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
