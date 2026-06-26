import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#191919]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 md:ml-56 min-w-0">
        {/* Mobile top bar */}
        <div className="md:hidden sticky top-0 z-10 flex items-center gap-3 px-4 py-3 border-b border-[#373737] bg-[#191919]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-[#9b9b9b] hover:text-[#e6e6e6] transition-colors"
            aria-label="開啟選單"
          >
            <Menu size={20} />
          </button>
          <span className="text-[#e6e6e6] text-sm font-medium">國營聯招備考平台</span>
        </div>

        <div className="p-4 md:p-8 max-w-5xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
