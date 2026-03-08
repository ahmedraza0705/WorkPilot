import { Target } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const Leads = () => (
    <div>
        <PageHeader title="Leads" subtitle="Track and manage business development leads" icon={Target} color="bg-green-100 text-green-600" />
        <div className="flex justify-end mb-4">
            <button className="btn-primary flex items-center gap-2"><Target size={16} />Add Lead</button>
        </div>
        <TableStub
            headers={['Company', 'Contact', 'Source', 'Stage', 'Value', 'Next Action']}
            rows={[
                ['NovaSoft Ltd', 'James Brown', 'LinkedIn', <span className="badge bg-blue-100 text-blue-700">Qualified</span>, '₹2.5L', 'Demo Call'],
                ['PrimeTech', 'Sarah Connor', 'Referral', <span className="badge bg-green-100 text-green-700">Proposal</span>, '₹4.8L', 'Send Proposal'],
                ['DataVista', 'Mike Chen', 'Cold Email', <span className="badge bg-yellow-100 text-yellow-700">Contacted</span>, '₹1.2L', 'Follow-up'],
            ]}
        />
    </div>
)

export default Leads
