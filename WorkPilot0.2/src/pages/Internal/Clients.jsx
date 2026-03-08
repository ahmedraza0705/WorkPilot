import { Grid } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const Clients = () => (
    <div>
        <PageHeader title="Clients Directory" subtitle="All client companies and their engagement status" icon={Grid} color="bg-indigo-100 text-indigo-600" />
        <TableStub
            headers={['Company', 'Industry', 'Hires', 'Contract', 'Account Manager', 'Status']}
            rows={[
                ['TechCorp Inc.', 'Software', '12', 'Enterprise', 'Alex Admin', <span className="badge bg-green-100 text-green-700">Active</span>],
                ['DataFlow Ltd', 'Analytics', '7', 'Pro', 'Brian BDM', <span className="badge bg-green-100 text-green-700">Active</span>],
                ['RetailMax', 'Retail', '3', 'Basic', 'Alex Admin', <span className="badge bg-yellow-100 text-yellow-700">Trial</span>],
            ]}
        />
    </div>
)

export default Clients
