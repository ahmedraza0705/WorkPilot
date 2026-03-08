import { Home, Users, DollarSign, Briefcase, TrendingUp } from 'react-feather'
import { PageHeader, StatCard } from '../../components/ui/PageHelpers'

const SADashboard = () => (
    <div>
        <PageHeader
            title="Super Admin Dashboard"
            subtitle="System-wide overview of the Unique World platform"
            icon={Home}
            color="bg-red-100 text-red-600"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard title="Total Agencies" value="42" icon={Users} color="bg-purple-100 text-purple-600" change="+3 this month" />
            <StatCard title="Total Transactions" value="₹8.2M" icon={DollarSign} color="bg-green-100 text-green-600" change="+12.5%" />
            <StatCard title="Active Jobs" value="287" icon={Briefcase} color="bg-blue-100 text-blue-600" change="+34 this week" />
            <StatCard title="Platform Growth" value="98.2%" icon={TrendingUp} color="bg-orange-100 text-orange-600" change="↑ 2.1% vs last month" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="card">
                <h3 className="font-semibold text-slate-700 mb-3">Recent Agencies</h3>
                <p className="text-sm text-slate-400">Agency activity charts will render here.</p>
            </div>
            <div className="card">
                <h3 className="font-semibold text-slate-700 mb-3">Transaction Summary</h3>
                <p className="text-sm text-slate-400">Revenue and billing summaries will render here.</p>
            </div>
        </div>
    </div>
)

export default SADashboard
