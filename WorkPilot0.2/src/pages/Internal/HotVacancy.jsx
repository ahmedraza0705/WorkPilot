import { Zap } from 'react-feather'
import { PageHeader } from '../../components/ui/PageHelpers'

const HotVacancy = () => (
    <div>
        <PageHeader title="Hot Vacancy" subtitle="Urgent open positions requiring immediate attention" icon={Zap} color="bg-red-100 text-red-600" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
                { title: 'Senior React Developer', company: 'TechCorp Inc.', loc: 'Bangalore / Remote', salary: '₹18–25 LPA', urgent: true, tags: ['React', 'TypeScript', 'AWS'] },
                { title: 'Data Science Lead', company: 'DataFlow Ltd', loc: 'Hyderabad', salary: '₹20–30 LPA', urgent: true, tags: ['Python', 'ML', 'TensorFlow'] },
                { title: 'Product Manager', company: 'InnovateSoft', loc: 'Pune', salary: '₹15–22 LPA', urgent: false, tags: ['Agile', 'Roadmap', 'SaaS'] },
            ].map((v, i) => (
                <div key={i} className="card border border-slate-100 hover:border-primary-200 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-slate-800 leading-tight">{v.title}</h3>
                        {v.urgent && <span className="badge bg-red-100 text-red-600 flex-shrink-0 ml-2">🔥 Hot</span>}
                    </div>
                    <p className="text-sm text-slate-500 mb-2">{v.company} · {v.loc}</p>
                    <p className="text-sm font-semibold text-green-600 mb-3">{v.salary}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {v.tags.map(t => <span key={t} className="badge bg-primary-50 text-primary-600">{t}</span>)}
                    </div>
                    <button className="btn-primary w-full text-sm py-2">Assign Recruiter</button>
                </div>
            ))}
        </div>
    </div>
)

export default HotVacancy
