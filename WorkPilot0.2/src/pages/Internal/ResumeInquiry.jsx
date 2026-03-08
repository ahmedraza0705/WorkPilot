import { FileText } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const ResumeInquiry = () => (
    <div>
        <PageHeader title="Resume Inquiry" subtitle="Track resume requests from clients" icon={FileText} color="bg-slate-100 text-slate-600" />
        <TableStub
            headers={['Request ID', 'Client', 'Skills Required', 'Count Needed', 'Deadline', 'Status']}
            rows={[
                ['#RQ-201', 'TechCorp', 'React, Node.js', '5', '15 Mar 2025', <span className="badge bg-yellow-100 text-yellow-700">Open</span>],
                ['#RQ-202', 'DataFlow', 'Python, SQL', '3', '10 Mar 2025', <span className="badge bg-blue-100 text-blue-700">In Progress</span>],
                ['#RQ-203', 'RetailMax', 'Sales, CRM', '8', '20 Mar 2025', <span className="badge bg-green-100 text-green-700">Fulfilled</span>],
            ]}
        />
    </div>
)

export default ResumeInquiry
