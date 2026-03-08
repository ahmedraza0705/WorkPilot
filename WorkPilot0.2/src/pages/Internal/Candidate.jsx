import { Users } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const Candidate = () => (
    <div>
        <PageHeader title="Candidate Management" subtitle="Browse, filter, and manage candidate profiles" icon={Users} color="bg-blue-100 text-blue-600" />
        <div className="flex justify-end mb-4">
            <button className="btn-primary flex items-center gap-2"><Users size={16} />Add Candidate</button>
        </div>
        <TableStub
            headers={['Name', 'Position', 'Experience', 'Skills', 'Status', 'Action']}
            rows={[
                ['Alice Johnson', 'Frontend Dev', '3 yrs', 'React, TS', <span className="badge bg-blue-100 text-blue-700">Active</span>, <button className="text-primary-600 text-xs font-semibold">View</button>],
                ['Bob Williams', 'Data Engineer', '5 yrs', 'Python, SQL', <span className="badge bg-green-100 text-green-700">Placed</span>, <button className="text-primary-600 text-xs font-semibold">View</button>],
                ['Carol Smith', 'UX Designer', '2 yrs', 'Figma, Adobe', <span className="badge bg-yellow-100 text-yellow-700">Screening</span>, <button className="text-primary-600 text-xs font-semibold">View</button>],
            ]}
        />
    </div>
)

export default Candidate
