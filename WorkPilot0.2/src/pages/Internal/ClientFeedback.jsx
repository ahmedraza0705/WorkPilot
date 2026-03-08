import { MessageSquare } from 'react-feather'
import { PageHeader } from '../../components/ui/PageHelpers'

const ClientFeedback = () => (
    <div>
        <PageHeader title="Client Feedback" subtitle="Review and respond to client feedback on candidates" icon={MessageSquare} color="bg-pink-100 text-pink-600" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                { client: 'TechCorp Inc.', feedback: 'Alice had exceptional communication skills. Highly recommended for the role.', rating: 5, candidate: 'Alice Johnson', date: '05 Mar 2025' },
                { client: 'DataFlow Ltd', feedback: 'Bob demonstrated strong technical knowledge but needs work on presentation.', rating: 3, candidate: 'Bob Williams', date: '06 Mar 2025' },
                { client: 'InnovateSoft', feedback: 'Carol\'s portfolio was impressive. We are proceeding to offer stage.', rating: 4, candidate: 'Carol Smith', date: '07 Mar 2025' },
            ].map((fb, i) => (
                <div key={i} className="card">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <p className="font-semibold text-slate-800">{fb.client}</p>
                            <p className="text-xs text-slate-400">Re: {fb.candidate} · {fb.date}</p>
                        </div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, s) => (
                                <span key={s} className={`text-sm ${s < fb.rating ? 'text-yellow-400' : 'text-slate-200'}`}>★</span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{fb.feedback}</p>
                </div>
            ))}
        </div>
    </div>
)

export default ClientFeedback
