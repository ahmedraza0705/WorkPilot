import { Users } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const UsersManagement = () => (
    <div>
        <PageHeader title="Users Management" subtitle="Manage system users, roles, and access permissions" icon={Users} color="bg-purple-100 text-purple-600" />
        <div className="flex justify-end mb-4">
            <button className="btn-primary flex items-center gap-2"><Users size={16} />Invite User</button>
        </div>
        <TableStub
            headers={['Name', 'Email', 'Role', 'Department', 'Last Login', 'Action']}
            rows={[
                ['Lisa Leader', 'leader@sura.com', <span className="badge badge-teamleader">TeamLeader</span>, 'Operations', '07 Mar 2025', <button className="text-primary-600 text-xs font-semibold">Edit</button>],
                ['Rachel Rec', 'recruiter@sura.com', <span className="badge badge-recruiter">Recruiter</span>, 'Talent', '06 Mar 2025', <button className="text-primary-600 text-xs font-semibold">Edit</button>],
                ['Brian BDM', 'bdm@sura.com', <span className="badge badge-bdm">BDM</span>, 'Business Dev', '05 Mar 2025', <button className="text-primary-600 text-xs font-semibold">Edit</button>],
            ]}
        />
    </div>
)

export default UsersManagement
