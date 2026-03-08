import { CreditCard, Check } from 'react-feather'
import { PageHeader } from '../../components/ui/PageHelpers'

const PLANS = [
    { name: 'Basic', price: '$299', period: '/month', hires: '5 hires/month', features: ['Job postings', 'Resume search', 'Email support'], highlighted: false },
    { name: 'Pro', price: '$799', period: '/month', hires: '20 hires/month', features: ['All Basic features', 'Best Matches AI', 'Priority support', 'HR Documentation'], highlighted: true },
    { name: 'Enterprise', price: 'Custom', period: '', hires: 'Unlimited', features: ['All Pro features', 'Dedicated account manager', 'SLA guarantee', 'Custom integrations'], highlighted: false },
]

const Pricing = () => (
    <div>
        <PageHeader title="Pricing Plans" subtitle="Choose the plan that best fits your hiring needs" icon={CreditCard} color="bg-primary-100 text-primary-600" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {PLANS.map((p, i) => (
                <div key={i} className={`rounded-2xl p-6 border-2 ${p.highlighted ? 'bg-primary-600 border-primary-600 text-white' : 'bg-white border-slate-200'}`}>
                    <p className={`text-sm font-semibold mb-1 ${p.highlighted ? 'text-primary-200' : 'text-slate-500'}`}>{p.name}</p>
                    <p className={`text-4xl font-extrabold ${p.highlighted ? 'text-white' : 'text-slate-800'}`}>
                        {p.price}<span className={`text-sm font-normal ${p.highlighted ? 'text-primary-200' : 'text-slate-400'}`}>{p.period}</span>
                    </p>
                    <p className={`text-sm mt-2 mb-5 ${p.highlighted ? 'text-primary-200' : 'text-slate-500'}`}>{p.hires}</p>
                    <ul className="space-y-2.5 mb-6">
                        {p.features.map(f => (
                            <li key={f} className="flex items-center gap-2 text-sm">
                                <Check size={14} className={p.highlighted ? 'text-white' : 'text-green-500'} />
                                <span className={p.highlighted ? 'text-white' : 'text-slate-600'}>{f}</span>
                            </li>
                        ))}
                    </ul>
                    <button className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${p.highlighted ? 'bg-white text-primary-600 hover:bg-primary-50' : 'btn-primary'}`}>
                        {p.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default Pricing
