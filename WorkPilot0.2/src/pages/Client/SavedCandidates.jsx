import { Heart } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const SavedCandidates = () => (
    <div>
        <PageHeader title="Saved Candidates" subtitle="Candidates you have bookmarked for future consideration" icon={Heart} color="bg-red-100 text-red-500" />
        <TableStub
            headers={['Name', 'Position', 'Experience', 'Match %', 'Saved On', 'Action']}
            rows={[
                ['Emma Zhang', 'Marketing Manager', '6 yrs', '85%', '04 Mar 2025', <button className="btn-primary text-xs py-1 px-3">Contact</button>],
                ['Liam Patel', 'Product Designer', '3 yrs', '79%', '05 Mar 2025', <button className="btn-primary text-xs py-1 px-3">Contact</button>],
            ]}
        />
    </div>
)

export default SavedCandidates
