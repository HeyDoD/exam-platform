import { Link } from 'react-router-dom'
import { BookOpen, FileText, CheckCircle2, Circle, ArrowRight } from 'lucide-react'
import { type DayPlan, type ScheduledTask } from '@/utils/scheduleGenerator'
import { type CompletedItems } from '@/hooks/useProgress'

interface Props {
  plan: DayPlan | null
  totalDays: number
  completed: CompletedItems
  onToggle: (task: ScheduledTask) => void
}

function taskKey(task: ScheduledTask) {
  return task.type === 'topic' ? task.topicId! : `${task.examYear}_${task.subjectKey}`
}

function isDone(task: ScheduledTask, completed: CompletedItems) {
  if (task.type === 'topic') return !!completed.topics[task.topicId!]
  return !!completed.exams[taskKey(task)]
}

export default function TodayTasks({ plan, totalDays, completed, onToggle }: Props) {
  if (!plan) {
    return (
      <div className="rounded-lg border border-[#373737] bg-[#252525] p-5">
        <p className="text-[#9b9b9b] text-sm text-center py-4">
          請先設定起始日與考試日期以產生今日計畫
        </p>
      </div>
    )
  }

  const tasks = plan.tasks.slice(0, 5)

  return (
    <div className="rounded-lg border border-[#373737] bg-[#252525] p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#9b9b9b] uppercase tracking-wider">今日任務</span>
          <span className="text-[10px] text-[#9b9b9b] border border-[#373737] rounded px-1.5 py-0.5">
            第 {plan.dayNumber} 天 / 共 {totalDays} 天
          </span>
        </div>
        <span className="text-[11px] text-[#9b9b9b]">{plan.date}</span>
      </div>

      {tasks.length === 0 ? (
        <p className="text-[#9b9b9b] text-sm text-center py-4">今天沒有安排任務</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => {
            const done = isDone(task, completed)
            return (
              <li key={taskKey(task)} className="flex items-center gap-3 group">
                <button
                  onClick={() => onToggle(task)}
                  className="shrink-0 text-[#9b9b9b] hover:text-[#e6e6e6] transition-colors"
                >
                  {done
                    ? <CheckCircle2 size={16} className="text-[#4caf6e]" />
                    : <Circle size={16} />
                  }
                </button>

                <div className="flex items-center gap-1.5 shrink-0">
                  {task.type === 'topic'
                    ? <BookOpen size={12} style={{ color: task.subjectColor }} />
                    : <FileText size={12} style={{ color: task.subjectColor }} />
                  }
                  <span className="text-[10px] font-medium" style={{ color: task.subjectColor }}>
                    {task.subjectLabel}
                  </span>
                </div>

                <span className={`flex-1 text-sm truncate ${done ? 'text-[#9b9b9b] line-through' : 'text-[#e6e6e6]'}`}>
                  {task.title}
                </span>

                <Link
                  to={task.path}
                  className="shrink-0 text-[#9b9b9b] hover:text-[#4a90d9] opacity-0 group-hover:opacity-100 transition-all"
                >
                  <ArrowRight size={14} />
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
