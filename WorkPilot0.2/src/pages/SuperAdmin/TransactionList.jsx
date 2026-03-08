import { DollarSign } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const SATransactionList = () => (
    <div>
        <PageHeader title="Transaction List" subtitle="Platform-wide billing and payment records" icon={DollarSign} color="bg-green-100 text-green-600" />
        <TableStub
            headers={['Txn ID', 'Agency', 'Amount', 'Type', 'Date', 'Status']}
            rows={[
                ['#TXN-001', 'Apex Recruitment', '₹45,000', 'Subscription', '01 Mar 2025', <span className="badge bg-green-100 text-green-700">Paid</span>],
                ['#TXN-002', 'Global Talent Hub', '₹32,500', 'Per-Hire', '28 Feb 2025', <span className="badge bg-green-100 text-green-700">Paid</span>],
                ['#TXN-003', 'SwiftHire Group', '₹18,000', 'Subscription', '25 Feb 2025', <span className="badge bg-yellow-100 text-yellow-700">Pending</span>],
            ]}
        />
    </div>
)

export default SATransactionList
