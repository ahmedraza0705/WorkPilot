import { Star } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const BestMatches = () => (
    <div>
        <PageHeader title="Best Matches" subtitle="AI-curated candidates that best match your job openings" icon={Star} color="bg-yellow-100 text-yellow-600" />
        <TableStub
            headers={['Candidate', 'Match %', 'Position', 'Experience', 'Location', 'Action']}
            rows={[
                ['Alice Johnson', <span className="font-bold text-green-600">97%</span>, 'Senior UX Designer', '5 yrs', 'Remote', <button className="btn-primary text-xs py-1 px-3">View Profile</button>],
                ['David Kim', <span className="font-bold text-green-600">92%</span>, 'Backend Engineer', '4 yrs', 'New York', <button className="btn-primary text-xs py-1 px-3">View Profile</button>],
                ['Emma Zhang', <span className="font-bold text-yellow-600">85%</span>, 'Marketing Manager', '6 yrs', 'Chicago', <button className="btn-primary text-xs py-1 px-3">View Profile</button>],
            ]}
        />
    </div>
)

export default BestMatches
