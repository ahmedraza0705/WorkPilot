import { Globe } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const Agency = () => (
    <div>
        <PageHeader title="Agency Management" subtitle="Manage all registered agencies on the platform" icon={Globe} color="bg-purple-100 text-purple-600" />
        <div className="flex justify-end mb-4">
            <button className="btn-primary flex items-center gap-2"><Globe size={16} />Add Agency</button>
        </div>
        <TableStub
            headers={['Agency Name', 'Contact', 'Location', 'Status', 'Joined', 'Action']}
            rows={[
                ['Apex Recruitment Ltd', 'apex@email.com', 'Mumbai', <span className="badge bg-green-100 text-green-700">Active</span>, '12 Jan 2025', <button className="text-primary-600 text-xs font-semibold">View</button>],
                ['Global Talent Hub', 'gth@email.com', 'Delhi', <span className="badge bg-green-100 text-green-700">Active</span>, '08 Feb 2025', <button className="text-primary-600 text-xs font-semibold">View</button>],
                ['SwiftHire Group', 'swift@email.com', 'Bangalore', <span className="badge bg-yellow-100 text-yellow-700">Pending</span>, '22 Feb 2025', <button className="text-primary-600 text-xs font-semibold">View</button>],
            ]}
        />
    </div>
)

export default Agency
