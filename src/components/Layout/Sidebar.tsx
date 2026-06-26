import { NavLink } from 'react-router-dom'
import { LayoutDashboard, BookOpen, FileText, LogIn, LogOut, User, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { signInWithGoogle, signInAsGuest, signOutUser, upgradeToGoogle } from '@/firebase/auth'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: '學習進度' },
  { to: '/study', icon: BookOpen, label: '學習園地' },
  { to: '/exams', icon: FileText, label: '歷屆試題' },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { user, loading } = useAuth()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen w-56 flex flex-col border-r border-[#373737] bg-[#191919] z-30 transition-transform duration-200',
        'md:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Logo */}
      <div className="px-5 py-6 border-b border-[#373737] flex items-center justify-between">
        <h1 className="text-[#e6e6e6] font-semibold text-sm leading-tight">
          國營聯招
          <span className="block text-[#9b9b9b] font-normal text-xs mt-0.5">資訊類備考平台</span>
        </h1>
        <button
          onClick={onClose}
          className="md:hidden text-[#555] hover:text-[#9b9b9b] transition-colors"
          aria-label="收合選單"
        >
          <X size={16} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                isActive
                  ? 'bg-[#2f2f2f] text-[#e6e6e6]'
                  : 'text-[#9b9b9b] hover:bg-[#2f2f2f] hover:text-[#e6e6e6]'
              )
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Auth */}
      <div className="px-3 py-4 border-t border-[#373737]">
        {loading ? null : user ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2 px-3 py-2">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" referrerPolicy="no-referrer" className="w-6 h-6 rounded-full" />
              ) : (
                <User size={16} className="text-[#9b9b9b]" />
              )}
              <span className="text-xs text-[#9b9b9b] truncate">
                {user.isAnonymous ? '訪客模式' : (user.displayName ?? user.email)}
              </span>
            </div>
            {user.isAnonymous && (
              <button
                onClick={upgradeToGoogle}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#4a90d9] hover:bg-[#2f2f2f] transition-colors"
              >
                <LogIn size={14} />
                升級 Google 帳號
              </button>
            )}
            <button
              onClick={signOutUser}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#9b9b9b] hover:bg-[#2f2f2f] hover:text-[#e6e6e6] transition-colors"
            >
              <LogOut size={14} />
              登出
            </button>
          </div>
        ) : (
          <div className="space-y-1.5">
            <button
              onClick={signInWithGoogle}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#e6e6e6] bg-[#2f2f2f] hover:bg-[#373737] transition-colors"
            >
              <LogIn size={14} />
              Google 登入
            </button>
            <button
              onClick={signInAsGuest}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#9b9b9b] hover:bg-[#2f2f2f] transition-colors"
            >
              先試用（訪客）
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}
