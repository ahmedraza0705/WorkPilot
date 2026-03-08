import { Tag } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const JobCategory = () => (
    <div>
        <PageHeader title="Job Category" subtitle="Manage global job categories across all agencies" icon={Tag} color="bg-blue-100 text-blue-600" />
        <div className="flex justify-end mb-4">
            <button className="btn-primary flex items-center gap-2"><Tag size={16} />Add Category</button>
        </div>
        <TableStub
            headers={['Category', 'Sub-categories', 'Active Jobs', 'Created', 'Action']}
            rows={[
                ['Information Technology', '12', '87', '10 Jan 2024', <button className="text-primary-600 text-xs font-semibold">Edit</button>],
                ['Healthcare', '8', '43', '15 Jan 2024', <button className="text-primary-600 text-xs font-semibold">Edit</button>],
                ['Finance & Banking', '6', '29', '20 Jan 2024', <button className="text-primary-600 text-xs font-semibold">Edit</button>],
            ]}
        />
    </div>
)

export default JobCategory
