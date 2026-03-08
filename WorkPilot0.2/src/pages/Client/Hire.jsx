import { UserCheck } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const Hire = () => (
    <div>
        <PageHeader title="Hired Candidates" subtitle="Track all candidates you have successfully hired" icon={UserCheck} color="bg-green-100 text-green-600" />
        <TableStub
            headers={['Name', 'Position', 'Hired On', 'Salary', 'Contract Type', 'Status']}
            rows={[
                ['Alice Johnson', 'Sr. UX Designer', '01 Feb 2025', '$110,000', 'Full-time', <span className="badge bg-green-100 text-green-700">Onboarded</span>],
                ['Robert Miles', 'Backend Eng.', '15 Jan 2025', '$130,000', 'Full-time', <span className="badge bg-blue-100 text-blue-700">Active</span>],
            ]}
        />
    </div>
)

export default Hire
