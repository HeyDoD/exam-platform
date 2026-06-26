import { SUBJECTS, EXAM_YEARS, type SubjectKey } from '@/data/subjects'

export type TaskType = 'topic' | 'exam'

export interface ScheduledTask {
  type: TaskType
  subjectKey: SubjectKey
  subjectLabel: string
  subjectColor: string
  title: string
  topicId?: string
  examYear?: number
  path: string
}

export interface DayPlan {
  dayNumber: number
  date: string
  tasks: ScheduledTask[]
}

// 建立每科的有序項目：章節（先學）→ 考古題（再練，近年優先）
function buildSubjectItems(key: SubjectKey): ScheduledTask[] {
  const sub = SUBJECTS[key]
  const items: ScheduledTask[] = []

  // 1. 學習章節
  for (const topic of sub.topics) {
    items.push({
      type: 'topic',
      subjectKey: key,
      subjectLabel: sub.label,
      subjectColor: sub.color,
      title: topic.title,
      topicId: topic.id,
      path: `/study?topic=${topic.id}`,
    })
  }

  // 2. 歷屆試題（114 → 100，近年優先）
  for (const year of EXAM_YEARS) {
    items.push({
      type: 'exam',
      subjectKey: key,
      subjectLabel: sub.label,
      subjectColor: sub.color,
      title: `${year} 年歷屆試題`,
      examYear: year,
      path: `/exams?year=${year}&subject=${key}`,
    })
  }

  return items
}

// 三科交錯：A、B、共同、A、B、共同...，讓每天都有不同科目
function interleaveSubjects(): ScheduledTask[] {
  const pools: Record<SubjectKey, ScheduledTask[]> = {
    A: buildSubjectItems('A'),
    B: buildSubjectItems('B'),
    common: buildSubjectItems('common'),
  }

  const result: ScheduledTask[] = []
  const order: SubjectKey[] = ['A', 'B', 'common']
  const maxLen = Math.max(...order.map((k) => pools[k].length))

  for (let i = 0; i < maxLen; i++) {
    for (const key of order) {
      if (pools[key][i]) result.push(pools[key][i])
    }
  }
  return result
}

export function generateSchedule(startDate: string, examDate: string): DayPlan[] {
  const start = new Date(startDate)
  const exam = new Date(examDate)
  const totalDays = Math.max(1, Math.ceil((exam.getTime() - start.getTime()) / 86400000))

  const allTasks = interleaveSubjects()
  const total = allTasks.length

  // 均勻分配：前幾天多 1 個，後面的天數少 1 個（不留空白天）
  const basePerDay = Math.floor(total / totalDays)
  const extra = total % totalDays // 前 extra 天多分 1 個

  const days: DayPlan[] = []
  let cursor = 0

  for (let i = 0; i < totalDays; i++) {
    const count = i < extra ? basePerDay + 1 : basePerDay
    const date = new Date(start)
    date.setDate(date.getDate() + i)

    days.push({
      dayNumber: i + 1,
      date: date.toISOString().split('T')[0],
      tasks: count > 0 ? allTasks.slice(cursor, cursor + count) : [],
    })
    cursor += count
  }

  return days
}

export function getTodayPlan(schedule: DayPlan[]): DayPlan | null {
  const today = new Date().toISOString().split('T')[0]
  return schedule.find((d) => d.date === today) ?? null
}

export function getDaysRemaining(examDate: string): number {
  const diff = new Date(examDate).getTime() - new Date().setHours(0, 0, 0, 0)
  return Math.max(0, Math.ceil(diff / 86400000))
}

export function getStudyDayNumber(startDate: string): number {
  const diff = new Date().setHours(0, 0, 0, 0) - new Date(startDate).getTime()
  return Math.max(1, Math.floor(diff / 86400000) + 1)
}
