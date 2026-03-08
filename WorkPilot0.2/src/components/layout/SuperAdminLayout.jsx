import { Outlet } from 'react-router-dom'
import SuperAdminSidebar from './SuperAdminSidebar'
import Topbar from './Topbar'

const SuperAdminLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-900">
            <SuperAdminSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                    <div>
                        <h1 className="text-lg font-bold text-white">Super Admin Control Panel</h1>
                        <p className="text-xs text-slate-400 mt-0.5">SURA · Unique World Platform</p>
                    </div>
                </div>
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default SuperAdminLayout
