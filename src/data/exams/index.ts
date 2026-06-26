export type { ExamData, MCExam, EssayExam, MixedExam, MCQuestion, EssayQuestion, SubQuestion } from './types'
import exam114A from './exam-114-A'
import exam114B from './exam-114-B'
import exam114Common from './exam-114-common'
import exam113A from './exam-113-A'
import exam113B from './exam-113-B'
import exam113Common from './exam-113-common'
import exam112A from './exam-112-A'
import exam112B from './exam-112-B'
import exam112Common from './exam-112-common'
import exam111A from './exam-111-A'
import exam111B from './exam-111-B'
import exam111Common from './exam-111-common'
import exam110A from './exam-110-A'
import exam110B from './exam-110-B'
import exam110Common from './exam-110-common'

export const EXAMS = {
  '114_A': exam114A,
  '114_B': exam114B,
  '114_common': exam114Common,
  '113_A': exam113A,
  '113_B': exam113B,
  '113_common': exam113Common,
  '112_A': exam112A,
  '112_B': exam112B,
  '112_common': exam112Common,
  '111_A': exam111A,
  '111_B': exam111B,
  '111_common': exam111Common,
  '110_A': exam110A,
  '110_B': exam110B,
  '110_common': exam110Common,
} as const

export type ExamKey = keyof typeof EXAMS

export function getExam(year: number, subject: string) {
  return EXAMS[`${year}_${subject}` as ExamKey] ?? null
}
