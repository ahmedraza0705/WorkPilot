import { Briefcase } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const Interview = () => (
    <div>
        <PageHeader title="Interview Tracking" subtitle="Manage and track all interview schedules and outcomes" icon={Briefcase} color="bg-orange-100 text-orange-600" />
        <div className="flex justify-end mb-4">
            <button className="btn-primary flex items-center gap-2"><Briefcase size={16} />Schedule Interview</button>
        </div>
        <TableStub
            headers={['Candidate', 'Position', 'Company', 'Date & Time', 'Round', 'Outcome']}
            rows={[
                ['Alice Johnson', 'Frontend Dev', 'TechCorp', '07 Mar 10:00 AM', 'HR Round', <span className="badge bg-green-100 text-green-700">Passed</span>],
                ['Bob Williams', 'Data Engineer', 'DataFlow', '07 Mar 2:00 PM', 'Technical', <span className="badge bg-yellow-100 text-yellow-700">Pending</span>],
                ['Carol Smith', 'UX Designer', 'InnovateSoft', '08 Mar 11:00 AM', 'Final', <span className="badge bg-blue-100 text-blue-700">Scheduled</span>],
            ]}
        />
    </div>
)

export default Interview
