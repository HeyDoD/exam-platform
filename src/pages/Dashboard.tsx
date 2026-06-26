import { useMemo } from 'react'
import { LayoutDashboard } from 'lucide-react'
import { useStudyPlan } from '@/hooks/useStudyPlan'
import { useProgress } from '@/hooks/useProgress'
import { generateSchedule, getTodayPlan, type ScheduledTask } from '@/utils/scheduleGenerator'
import { SUBJECTS } from '@/data/subjects'
import CountdownCard from '@/components/Dashboard/CountdownCard'
import DateSettings from '@/components/Dashboard/DateSettings'
import ProgressRing from '@/components/Dashboard/ProgressRing'
import TodayTasks from '@/components/Dashboard/TodayTasks'
import ScheduleTable from '@/components/Dashboard/ScheduleTable'

export default function Dashboard() {
  const { plan, loading, savePlan } = useStudyPlan()
  const { completed, stats, markTopic, markExam } = useProgress()

  const schedule = useMemo(() => {
    if (!plan) return []
    return generateSchedule(plan.startDate, plan.examDate)
  }, [plan])

  const todayPlan = useMemo(() => getTodayPlan(schedule), [schedule])

  async function handleToggle(task: ScheduledTask) {
    if (task.type === 'topic' && task.topicId) {
      await markTopic(task.topicId, !completed.topics[task.topicId])
    } else if (task.type === 'exam' && task.examYear) {
      const key = `${task.examYear}_${task.subjectKey}`
      await markExam(key, !completed.exams[key])
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-[#9b9b9b] text-sm">
        載入中...
      </div>
    )
  }

  return (
    <div className="space-y-5 max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <LayoutDashboard size={20} className="text-[#4a90d9]" />
        <h2 className="text-[#e6e6e6] text-xl font-semibold">學習進度</h2>
      </div>

      {/* Countdown（僅在設定日期後顯示） */}
      {plan && (
        <CountdownCard startDate={plan.startDate} examDate={plan.examDate} />
      )}

      {/* 日期設定 */}
      <DateSettings current={plan} onSave={savePlan} />

      {/* 進度圓環 */}
      <div className="rounded-lg border border-[#373737] bg-[#252525] p-5">
        <div className="text-xs font-medium text-[#9b9b9b] uppercase tracking-wider mb-5">各科完成率</div>
        <div className="flex justify-around flex-wrap gap-6">
          <ProgressRing
            percentage={stats.overall}
            color="#e6e6e6"
            label="整體"
            subtitle="加權平均"
            size={90}
          />
          {(['A', 'B', 'common'] as const).map((key) => {
            const sub = SUBJECTS[key]
            return (
              <ProgressRing
                key={key}
                percentage={stats[key]}
                color={sub.color}
                label={sub.label}
                subtitle={`比重 ${sub.weight * 100}%`}
                size={90}
              />
            )
          })}
        </div>
      </div>

      {/* 今日任務 */}
      <TodayTasks
        plan={todayPlan}
        totalDays={schedule.length}
        completed={completed}
        onToggle={handleToggle}
      />

      {/* 完整排程 */}
      <ScheduleTable schedule={schedule} completed={completed} />
    </div>
  )
}
