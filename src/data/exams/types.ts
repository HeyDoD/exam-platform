export type ExamSubjectKey = 'A' | 'B' | 'common'
export type QuestionType = 'mc' | 'essay'

export interface MCQuestion {
  id: number
  text: string
  options: [string, string, string, string]
  answer: 'A' | 'B' | 'C' | 'D'
  topic: string
  explanation?: string
}

export interface SubQuestion {
  id: string
  text: string
  points: number
}

export interface EssayQuestion {
  id: number
  text: string
  points: number
  subquestions?: SubQuestion[]
}

export interface MCExam {
  year: number
  subject: ExamSubjectKey
  title: string
  type: 'mc'
  totalQuestions: number
  questions: MCQuestion[]
}

export interface EssayExam {
  year: number
  subject: ExamSubjectKey
  title: string
  type: 'essay'
  questions: EssayQuestion[]
}

export interface MixedExam {
  year: number
  subject: ExamSubjectKey
  title: string
  type: 'mixed'
  sections: {
    id: string
    title: string
    type: QuestionType
    questions: MCQuestion[] | EssayQuestion[]
  }[]
}

export type ExamData = MCExam | EssayExam | MixedExam
