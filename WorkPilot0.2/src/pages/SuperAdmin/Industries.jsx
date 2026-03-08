import { Layers } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const Industries = () => (
    <div>
        <PageHeader title="Industries" subtitle="Global industry classification for the platform" icon={Layers} color="bg-orange-100 text-orange-600" />
        <div className="flex justify-end mb-4">
            <button className="btn-primary flex items-center gap-2"><Layers size={16} />Add Industry</button>
        </div>
        <TableStub
            headers={['Industry', 'Companies', 'Jobs Posted', 'Growth', 'Status']}
            rows={[
                ['Software & Technology', '342', '1,240', '+18%', <span className="badge bg-green-100 text-green-700">Active</span>],
                ['Manufacturing', '189', '645', '+7%', <span className="badge bg-green-100 text-green-700">Active</span>],
                ['Retail & Commerce', '215', '489', '+11%', <span className="badge bg-green-100 text-green-700">Active</span>],
            ]}
        />
    </div>
)

export default Industries
