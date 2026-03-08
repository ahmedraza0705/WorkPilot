import { Briefcase, MapPin, Clock, DollarSign } from 'react-feather'
import { PageHeader } from '../../components/ui/PageHelpers'

const JOB_DATA = [
    { title: 'Senior UX Designer', dept: 'Design', loc: 'Remote', salary: '$90k–$120k', type: 'Full-time', tags: ['Figma', 'User Research', 'Prototyping'], applicants: 24 },
    { title: 'Backend Engineer (Node)', dept: 'Engineering', loc: 'New York, NY', salary: '$110k–$140k', type: 'Full-time', tags: ['Node.js', 'PostgreSQL', 'AWS'], applicants: 41 },
    { title: 'Marketing Manager', dept: 'Marketing', loc: 'Chicago, IL', salary: '$70k–$90k', type: 'Full-time', tags: ['SEO', 'Content', 'Analytics'], applicants: 18 },
]

const JobOpening = () => (
    <div>
        <PageHeader title="Job Openings" subtitle="Your active job postings and their status" icon={Briefcase} color="bg-orange-100 text-orange-600" />
        <div className="flex justify-end mb-4">
            <button className="btn-primary flex items-center gap-2"><Briefcase size={16} />Post New Job</button>
        </div>
        <div className="grid gap-4">
            {JOB_DATA.map((job, i) => (
                <div key={i} className="card flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <Briefcase size={18} className="text-orange-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800">{job.title}</h3>
                                <p className="text-xs text-slate-400">{job.dept}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-slate-500 ml-13 mb-3">
                            <span className="flex items-center gap-1"><MapPin size={12} />{job.loc}</span>
                            <span className="flex items-center gap-1"><DollarSign size={12} />{job.salary}</span>
                            <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {job.tags.map(t => <span key={t} className="badge bg-slate-100 text-slate-600">{t}</span>)}
                        </div>
                    </div>
                    <div className="flex sm:flex-col items-center gap-3 sm:gap-1 sm:text-right">
                        <div className="text-center">
                            <p className="text-xl font-bold text-primary-600">{job.applicants}</p>
                            <p className="text-xs text-slate-400">Applicants</p>
                        </div>
                        <button className="btn-secondary text-sm py-1.5 px-4">View</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default JobOpening
