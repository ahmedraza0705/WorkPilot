// Reusable helper to create styled page stubs quickly
import { useSelector } from 'react-redux'

export const PageHeader = ({ title, subtitle, icon: Icon, color = 'bg-primary-100 text-primary-600' }) => (
    <div className="flex items-center gap-4 mb-6">
        {Icon && (
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
                <Icon size={22} />
            </div>
        )}
        <div>
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="text-slate-500 text-sm mt-0.5">{subtitle}</p>}
        </div>
    </div>
)

export const StatCard = ({ title, value, icon: Icon, color, change }) => (
    <div className="stat-card">
        <div className={`stat-icon ${color}`}>
            <Icon size={20} />
        </div>
        <div>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
            <p className="text-sm text-slate-500">{title}</p>
            {change && <p className="text-xs text-green-500 font-medium mt-1">{change}</p>}
        </div>
    </div>
)

export const TableStub = ({ headers, rows }) => (
    <div className="card overflow-hidden p-0">
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>{headers.map(h => <th key={h} className="table-header">{h}</th>)}</tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="table-row">
                            {row.map((cell, j) => <td key={j} className="table-cell">{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)
