import { Heart, Briefcase, MapPin, DollarSign, Clock } from 'react-feather'
import { PageHeader } from '../../components/ui/PageHelpers'

const JOB_MATCHES = [
    { title: 'Frontend Developer', company: 'TechCorp Inc.', loc: 'Remote', salary: '$80k–$100k', match: 95, type: 'Full-time', tags: ['React', 'JavaScript', 'CSS'] },
    { title: 'UI/UX Developer', company: 'CreativeStudio', loc: 'New York', salary: '$70k–$90k', match: 88, type: 'Full-time', tags: ['Figma', 'React', 'SCSS'] },
    { title: 'React Native Dev', company: 'AppWorks', loc: 'Remote', salary: '$90k–$115k', match: 82, type: 'Contract', tags: ['React Native', 'TypeScript'] },
]

const JobMatches = () => (
    <div>
        <PageHeader title="Job Matches" subtitle="Jobs that best match your skills and profile" icon={Heart} color="bg-teal-100 text-teal-600" />
        <div className="grid gap-4">
            {JOB_MATCHES.map((job, i) => (
                <div key={i} className="card hover:border hover:border-primary-200 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Briefcase size={20} className="text-primary-600" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-slate-800">{job.title}</h3>
                                <span className="badge bg-green-100 text-green-700">🎯 {job.match}% Match</span>
                            </div>
                            <p className="text-sm text-slate-500 mb-2">{job.company}</p>
                            <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-3">
                                <span className="flex items-center gap-1"><MapPin size={12} />{job.loc}</span>
                                <span className="flex items-center gap-1"><DollarSign size={12} />{job.salary}</span>
                                <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {job.tags.map(t => <span key={t} className="badge bg-primary-50 text-primary-600">{t}</span>)}
                            </div>
                        </div>
                        <div className="flex gap-2 sm:flex-col">
                            <button className="btn-primary text-sm py-2 px-4">Apply Now</button>
                            <button className="btn-secondary text-sm py-2 px-4">Save</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default JobMatches
