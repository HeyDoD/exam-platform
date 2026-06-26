import { useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen, FileText, CheckCircle2 } from 'lucide-react'
import { type DayPlan } from '@/utils/scheduleGenerator'
import { type CompletedItems } from '@/hooks/useProgress'

interface Props {
  schedule: DayPlan[]
  completed: CompletedItems
}

function isDone(task: { type: string; topicId?: string; examYear?: number; subjectKey: string }, completed: CompletedItems) {
  if (task.type === 'topic') return !!completed.topics[task.topicId!]
  return !!completed.exams[`${task.examYear}_${task.subjectKey}`]
}

const today = new Date().toISOString().split('T')[0]

export default function ScheduleTable({ schedule, completed }: Props) {
  const [open, setOpen] = useState(false)

  if (schedule.length === 0) return null

  const allTasks = schedule.flatMap((d) => d.tasks)
  const doneTasks = allTasks.filter((t) => isDone(t, completed)).length
  const totalTasks = allTasks.length

  return (
    <div className="rounded-lg border border-[#373737] bg-[#252525]">
      {/* Header toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#2f2f2f] transition-colors rounded-lg"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[#9b9b9b] uppercase tracking-wider">完整排程</span>
          <span className="text-[10px] border border-[#373737] rounded px-1.5 py-0.5 text-[#9b9b9b]">
            {doneTasks} / {totalTasks} 項完成
          </span>
        </div>
        {open ? <ChevronUp size={14} className="text-[#9b9b9b]" /> : <ChevronDown size={14} className="text-[#9b9b9b]" />}
      </button>

      {open && (
        <div className="border-t border-[#373737] overflow-auto max-h-[480px]">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-[#252525] border-b border-[#373737]">
              <tr>
                <th className="text-left px-5 py-2.5 text-[10px] text-[#9b9b9b] uppercase tracking-wider font-medium w-28">日期</th>
                <th className="text-left px-3 py-2.5 text-[10px] text-[#9b9b9b] uppercase tracking-wider font-medium w-12">第幾天</th>
                <th className="text-left px-3 py-2.5 text-[10px] text-[#9b9b9b] uppercase tracking-wider font-medium">今日任務</th>
                <th className="text-left px-5 py-2.5 text-[10px] text-[#9b9b9b] uppercase tracking-wider font-medium w-16">狀態</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((day) => {
                const isToday = day.date === today
                const hasTasks = day.tasks.length > 0
                const allDone = hasTasks && day.tasks.every((t) => isDone(t, completed))
                const isPast = day.date < today

                return (
                  <tr
                    key={day.date}
                    className={`border-b border-[#2a2a2a] transition-colors ${
                      isToday ? 'bg-[#1e2a3a]' : 'hover:bg-[#2a2a2a]'
                    }`}
                  >
                    {/* 日期 */}
                    <td className="px-5 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4a90d9] shrink-0" />
                        )}
                        <span className={`text-xs ${isToday ? 'text-[#4a90d9] font-medium' : isPast ? 'text-[#9b9b9b]' : 'text-[#e6e6e6]'}`}>
                          {day.date}
                        </span>
                        {isToday && <span className="text-[10px] text-[#4a90d9]">今天</span>}
                      </div>
                    </td>

                    {/* 第幾天 */}
                    <td className="px-3 py-3 text-center">
                      <span className="text-xs text-[#9b9b9b]">{day.dayNumber}</span>
                    </td>

                    {/* 任務列表 */}
                    <td className="px-3 py-3">
                      <div className="flex flex-wrap gap-1.5">
                        {day.tasks.slice(0, 4).map((task, i) => {
                          const done = isDone(task, completed)
                          return (
                            <span
                              key={i}
                              className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded border ${
                                done
                                  ? 'border-[#2a2a2a] text-[#9b9b9b] line-through'
                                  : 'border-[#373737] text-[#e6e6e6]'
                              }`}
                            >
                              {task.type === 'topic'
                                ? <BookOpen size={9} style={{ color: task.subjectColor }} />
                                : <FileText size={9} style={{ color: task.subjectColor }} />
                              }
                              {task.title.length > 14 ? task.title.slice(0, 14) + '…' : task.title}
                            </span>
                          )
                        })}
                        {day.tasks.length > 4 && (
                          <span className="text-[10px] text-[#9b9b9b] px-1">+{day.tasks.length - 4}</span>
                        )}
                      </div>
                    </td>

                    {/* 狀態 */}
                    <td className="px-5 py-3">
                      {!hasTasks ? (
                        <span className="text-[10px] text-[#9b9b9b]">—</span>
                      ) : allDone ? (
                        <CheckCircle2 size={14} className="text-[#4caf6e]" />
                      ) : isPast ? (
                        <span className="text-[10px] text-[#e05c5c]">未完成</span>
                      ) : (
                        <span className="text-[10px] text-[#9b9b9b]">待辦</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
