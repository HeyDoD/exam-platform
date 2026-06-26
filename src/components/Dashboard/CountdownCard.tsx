import { Clock } from 'lucide-react'
import { getDaysRemaining, getStudyDayNumber } from '@/utils/scheduleGenerator'

interface Props {
  startDate: string
  examDate: string
}

export default function CountdownCard({ startDate, examDate }: Props) {
  const daysLeft = getDaysRemaining(examDate)
  const dayNum = getStudyDayNumber(startDate)

  const urgencyColor =
    daysLeft <= 7 ? '#e05c5c' : daysLeft <= 30 ? '#e8a94e' : '#4a90d9'

  return (
    <div className="rounded-lg border border-[#373737] bg-[#252525] p-5 flex items-center gap-5">
      <Clock size={20} className="text-[#9b9b9b] shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-[#9b9b9b] text-xs mb-1">距離考試</div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold" style={{ color: urgencyColor }}>{daysLeft}</span>
          <span className="text-[#9b9b9b] text-sm">天</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <div className="text-[#9b9b9b] text-xs mb-1">目前第</div>
        <div className="flex items-baseline gap-1 justify-end">
          <span className="text-2xl font-semibold text-[#e6e6e6]">{dayNum}</span>
          <span className="text-[#9b9b9b] text-sm">天</span>
        </div>
      </div>
    </div>
  )
}
