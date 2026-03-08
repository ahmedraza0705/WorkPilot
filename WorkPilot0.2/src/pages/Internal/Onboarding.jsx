import { UserCheck } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const Onboarding = () => (
    <div>
        <PageHeader title="Onboarding" subtitle="Track candidate onboarding progress and documentation" icon={UserCheck} color="bg-teal-100 text-teal-600" />
        <TableStub
            headers={['Candidate', 'Company', 'Start Date', 'Progress', 'Status']}
            rows={[
                ['Alice Johnson', 'TechCorp Inc.', '01 Mar 2025', '80%', <span className="badge bg-blue-100 text-blue-700">In Progress</span>],
                ['Mark Davis', 'DataFlow Ltd', '05 Mar 2025', '100%', <span className="badge bg-green-100 text-green-700">Completed</span>],
                ['Susan Lee', 'InnovateSoft', '10 Mar 2025', '20%', <span className="badge bg-yellow-100 text-yellow-700">Started</span>],
            ]}
        />
    </div>
)

export default Onboarding
