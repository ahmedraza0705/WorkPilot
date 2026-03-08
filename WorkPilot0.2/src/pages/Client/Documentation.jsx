import { BookOpen, Download, Eye } from 'react-feather'
import { PageHeader } from '../../components/ui/PageHelpers'

const DOCS = [
    { name: 'Employment Contract Template', type: 'PDF', size: '284 KB', updated: '01 Jan 2025' },
    { name: 'NDA Agreement – Standard', type: 'DOCX', size: '120 KB', updated: '15 Feb 2025' },
    { name: 'Onboarding Checklist', type: 'PDF', size: '98 KB', updated: '20 Feb 2025' },
    { name: 'Benefits & Compensation Guide', type: 'PDF', size: '412 KB', updated: '28 Feb 2025' },
]

const Documentation = () => (
    <div>
        <PageHeader title="HR Documentation" subtitle="Download and manage HR templates and legal documents" icon={BookOpen} color="bg-indigo-100 text-indigo-600" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOCS.map((doc, i) => (
                <div key={i} className="card flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <BookOpen size={16} className="text-indigo-600" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-800 text-sm">{doc.name}</p>
                            <p className="text-xs text-slate-400">{doc.type} · {doc.size} · Updated {doc.updated}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center"><Eye size={14} className="text-slate-500" /></button>
                        <button className="w-8 h-8 rounded-lg bg-primary-100 hover:bg-primary-200 flex items-center justify-center"><Download size={14} className="text-primary-600" /></button>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default Documentation
