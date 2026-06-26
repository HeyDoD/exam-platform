import { useState } from 'react'
import { CalendarDays, Save, AlertCircle, Check, X } from 'lucide-react'
import { type StudyPlan } from '@/hooks/useStudyPlan'

interface Props {
  current: StudyPlan | null
  onSave: (plan: StudyPlan) => void
}

function formatDate(d: string) {
  if (!d) return ''
  const [y, m, day] = d.split('-')
  return `${y} 年 ${m} 月 ${day} 日`
}

export default function DateSettings({ current, onSave }: Props) {
  const today = new Date().toISOString().split('T')[0]
  const [startDate, setStartDate] = useState(current?.startDate ?? today)
  const [examDate, setExamDate] = useState(current?.examDate ?? '')
  const [confirming, setConfirming] = useState(false)
  const [saved, setSaved] = useState(false)

  const hasChanged =
    startDate !== (current?.startDate ?? today) ||
    examDate !== (current?.examDate ?? '')

  function handleSaveClick() {
    if (!startDate || !examDate) return
    setConfirming(true)
  }

  function handleConfirm() {
    onSave({ startDate, examDate })
    setConfirming(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  function handleCancel() {
    setConfirming(false)
  }

  return (
    <div className="rounded-lg border border-[#373737] bg-[#252525] p-5">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays size={15} className="text-[#9b9b9b]" />
        <span className="text-xs font-medium text-[#9b9b9b] uppercase tracking-wider">讀書計畫設定</span>
        {saved && (
          <span className="flex items-center gap-1 text-[11px] text-[#4caf6e] ml-auto">
            <Check size={12} /> 已儲存
          </span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <label className="flex-1">
          <div className="text-[11px] text-[#9b9b9b] mb-1.5">起始日</div>
          <input
            type="date"
            value={startDate}
            onChange={(e) => { setStartDate(e.target.value); setConfirming(false) }}
            className="w-full bg-[#191919] border border-[#373737] rounded-md px-3 py-2 text-sm text-[#e6e6e6] focus:outline-none focus:border-[#4a90d9] transition-colors cursor-pointer"
            style={{ colorScheme: 'dark' }}
          />
        </label>
        <label className="flex-1">
          <div className="text-[11px] text-[#9b9b9b] mb-1.5">考試日期</div>
          <input
            type="date"
            value={examDate}
            min={startDate}
            onChange={(e) => { setExamDate(e.target.value); setConfirming(false) }}
            className="w-full bg-[#191919] border border-[#373737] rounded-md px-3 py-2 text-sm text-[#e6e6e6] focus:outline-none focus:border-[#4a90d9] transition-colors cursor-pointer"
            style={{ colorScheme: 'dark' }}
          />
        </label>
        <div className="flex items-end">
          <button
            onClick={handleSaveClick}
            disabled={!startDate || !examDate || !hasChanged}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium bg-[#4a90d9] text-white hover:bg-[#3a7bc8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Save size={14} />
            儲存
          </button>
        </div>
      </div>

      {/* 確認列 */}
      {confirming && (
        <div className="mt-3 flex items-center gap-3 rounded-md border border-[#e8a94e]/40 bg-[#e8a94e]/5 px-4 py-3">
          <AlertCircle size={14} className="text-[#e8a94e] shrink-0" />
          <p className="text-xs text-[#e6e6e6] flex-1">
            將起始日設為 <span className="text-[#e8a94e]">{formatDate(startDate)}</span>，
            考試日期設為 <span className="text-[#e8a94e]">{formatDate(examDate)}</span>。確認儲存？
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleConfirm}
              className="flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium bg-[#4caf6e] text-white hover:bg-[#3d9e5f] transition-colors"
            >
              <Check size={12} /> 確認
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-1 px-3 py-1.5 rounded text-xs text-[#9b9b9b] hover:bg-[#2f2f2f] transition-colors"
            >
              <X size={12} /> 取消
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
