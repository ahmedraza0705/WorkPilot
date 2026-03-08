import { Search } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const ClientCandidate = () => (
    <div>
        <PageHeader title="Candidate Search" subtitle="Search and filter from our talent pool" icon={Search} color="bg-sky-100 text-sky-600" />
        <div className="card mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
                <input type="text" placeholder="Search by name, skill, or position…" className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                <select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>All Experience</option>
                    <option>0–2 years</option>
                    <option>3–5 years</option>
                    <option>6+ years</option>
                </select>
                <button className="btn-primary flex items-center gap-2"><Search size={16} />Search</button>
            </div>
        </div>
        <TableStub
            headers={['Name', 'Skills', 'Experience', 'Location', 'Availability', 'Action']}
            rows={[
                ['Alice Johnson', 'React, TS', '5 yrs', 'Remote', 'Immediate', <button className="btn-primary text-xs py-1 px-3">Save</button>],
                ['David Kim', 'Node.js, AWS', '4 yrs', 'New York', '2 weeks', <button className="btn-primary text-xs py-1 px-3">Save</button>],
                ['Emma Zhang', 'Python, ML', '6 yrs', 'Chicago', '1 month', <button className="btn-primary text-xs py-1 px-3">Save</button>],
            ]}
        />
    </div>
)

export default ClientCandidate
