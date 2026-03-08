import { DollarSign } from 'react-feather'
import { PageHeader, TableStub } from '../../components/ui/PageHelpers'

const TransactionList = () => (
    <div>
        <PageHeader title="Transaction List" subtitle="Financial records for placements and services" icon={DollarSign} color="bg-green-100 text-green-600" />
        <TableStub
            headers={['ID', 'Client', 'Candidate', 'Amount', 'Type', 'Date', 'Status']}
            rows={[
                ['#T1001', 'TechCorp', 'Alice Johnson', '₹85,000', 'Placement Fee', '01 Mar 2025', <span className="badge bg-green-100 text-green-700">Paid</span>],
                ['#T1002', 'DataFlow', 'Bob Williams', '₹72,000', 'Placement Fee', '03 Mar 2025', <span className="badge bg-yellow-100 text-yellow-700">Pending</span>],
                ['#T1003', 'RetailMax', 'Carol Smith', '₹48,000', 'Placement Fee', '05 Mar 2025', <span className="badge bg-green-100 text-green-700">Paid</span>],
            ]}
        />
    </div>
)

export default TransactionList
