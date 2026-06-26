import { useState } from 'react'
import { FileText, CheckCircle2, ChevronLeft, BookCheck } from 'lucide-react'
import { SUBJECTS, EXAM_YEARS, type SubjectKey } from '@/data/subjects'
import { getExam, type MCQuestion, type EssayQuestion } from '@/data/exams'
import { useProgress } from '@/hooks/useProgress'
import MCExamView from '@/components/Exams/MCExamView'
import EssayExamView from '@/components/Exams/EssayExamView'

const SUBJECT_KEYS: SubjectKey[] = ['A', 'B', 'common']

export default function Exams() {
  const [year, setYear] = useState(114)
  const [subject, setSubject] = useState<SubjectKey>('A')
  const [started, setStarted] = useState(false)
  const [mixedSection, setMixedSection] = useState(0)
  const { completed, markExam } = useProgress()

  const exam = getExam(year, subject)
  const examKey = `${year}_${subject}`
  const isDone = !!completed.exams[examKey]

  function handleMarkDone() {
    markExam(examKey, !isDone)
  }

  function handleBack() {
    setStarted(false)
    setMixedSection(0)
  }

  // ── Exam view ──────────────────────────────────────────────────────────────
  if (started && exam) {
    const examTitle = `${year} 年 ${exam.title}`

    if (exam.type === 'mc') {
      return (
        <MCExamView
          questions={exam.questions}
          pointsPerQ={100 / exam.totalQuestions}
          title={examTitle}
          isDone={isDone}
          onMarkDone={handleMarkDone}
          onBack={handleBack}
        />
      )
    }

    if (exam.type === 'essay') {
      return (
        <EssayExamView
          questions={exam.questions}
          title={examTitle}
          isDone={isDone}
          onMarkDone={handleMarkDone}
          onBack={handleBack}
        />
      )
    }

    // Mixed exam (common subject): 國文 essay + 英文 MC
    if (exam.type === 'mixed') {
      const section = exam.sections[mixedSection]
      return (
        <div className="space-y-4 max-w-3xl">
          {/* Header */}
          <div className="flex items-center gap-3">
            <button onClick={handleBack} className="shrink-0 text-[#9b9b9b] hover:text-[#e6e6e6] transition-colors">
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-[#e6e6e6] text-base font-semibold flex-1 truncate">{examTitle}</h2>
            <button
              onClick={handleMarkDone}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border transition-colors shrink-0 ${
                isDone
                  ? 'border-[#4caf6e]/40 text-[#4caf6e] bg-[#4caf6e]/10'
                  : 'border-[#373737] text-[#9b9b9b] hover:bg-[#2f2f2f]'
              }`}
            >
              <BookCheck size={12} />
              {isDone ? '已完成' : '標記完成'}
            </button>
          </div>

          {/* Section tabs */}
          <div className="flex gap-2">
            {exam.sections.map((sec, i) => (
              <button
                key={sec.id}
                onClick={() => setMixedSection(i)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  mixedSection === i
                    ? 'bg-[#e8a94e]/15 border-[#e8a94e] text-[#e8a94e]'
                    : 'border-[#373737] text-[#9b9b9b] bg-[#252525] hover:bg-[#2f2f2f]'
                }`}
              >
                {sec.title.split(' — ')[0]}
              </button>
            ))}
          </div>

          {/* Section content */}
          {section.type === 'essay' ? (
            <EssayExamView
              questions={section.questions as EssayQuestion[]}
              title={section.title}
              isDone={isDone}
              onMarkDone={handleMarkDone}
              onBack={handleBack}
              headerless
            />
          ) : (
            <MCExamView
              questions={section.questions as MCQuestion[]}
              pointsPerQ={2.5}
              title={section.title}
              isDone={isDone}
              onMarkDone={handleMarkDone}
              onBack={handleBack}
              headerless
            />
          )}
        </div>
      )
    }
  }

  // ── Selector view ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-5 max-w-3xl">
      {/* Page header */}
      <div className="flex items-center gap-3">
        <FileText size={20} className="text-[#e8a94e]" />
        <h2 className="text-[#e6e6e6] text-xl font-semibold">歷屆試題</h2>
      </div>

      {/* Year selector */}
      <div className="rounded-lg border border-[#373737] bg-[#252525] p-5">
        <div className="text-xs font-medium text-[#9b9b9b] uppercase tracking-wider mb-3">選擇年份</div>
        <div className="flex flex-wrap gap-2">
          {EXAM_YEARS.map((y) => {
            const hasData = getExam(y, subject) !== null
            return (
              <button
                key={y}
                onClick={() => hasData && setYear(y)}
                className={`px-3 py-1.5 rounded text-sm font-medium border transition-colors ${
                  year === y
                    ? 'bg-[#e8a94e] border-[#e8a94e] text-[#1a1a1a]'
                    : hasData
                      ? 'border-[#373737] text-[#e6e6e6] hover:bg-[#2f2f2f]'
                      : 'border-[#252525] text-[#3a3a3a] cursor-default'
                }`}
              >
                {y}
                {!hasData && <span className="ml-1 text-[9px] text-[#333]">整備中</span>}
              </button>
            )
          })}
        </div>
      </div>

      {/* Subject selector */}
      <div className="rounded-lg border border-[#373737] bg-[#252525] p-5">
        <div className="text-xs font-medium text-[#9b9b9b] uppercase tracking-wider mb-3">選擇科目</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SUBJECT_KEYS.map((k) => {
            const sub = SUBJECTS[k]
            const isActive = subject === k
            return (
              <button
                key={k}
                onClick={() => setSubject(k)}
                className={`px-4 py-3 rounded-lg border text-left transition-colors ${
                  isActive ? '' : 'border-[#373737] bg-[#1e1e1e] hover:bg-[#2a2a2a]'
                }`}
                style={
                  isActive
                    ? { borderColor: sub.color, backgroundColor: sub.color + '18' }
                    : {}
                }
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: isActive ? sub.color : '#e6e6e6' }}
                >
                  {sub.label}
                </div>
                <div className="text-xs text-[#9b9b9b] mt-0.5">{sub.subtitle}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Exam info card */}
      {exam ? (
        <div className="rounded-lg border border-[#373737] bg-[#252525] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-[#e6e6e6]">
              {year} 年 {exam.title}
            </div>
            <div className="text-xs text-[#9b9b9b] mt-1">
              {exam.type === 'mc' &&
                `單選題 ${exam.totalQuestions} 題 · 每題 ${100 / exam.totalQuestions} 分 · 考試時間 90 分鐘`}
              {exam.type === 'essay' &&
                `申論題 ${exam.questions.length} 大題 · 共 100 分 · 考試時間 120 分鐘`}
              {exam.type === 'mixed' &&
                '國文論文寫作 100 分 · 英文單選題 40 題 × 2.5 分 · 考試時間 120 分鐘'}
            </div>
            {isDone && (
              <div className="flex items-center gap-1 mt-1.5 text-xs text-[#4caf6e]">
                <CheckCircle2 size={11} /> 已標記完成
              </div>
            )}
          </div>
          <button
            onClick={() => setStarted(true)}
            className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            style={{
              backgroundColor: SUBJECTS[subject].color,
              color: subject === 'common' ? '#1a1a1a' : '#fff',
            }}
          >
            {exam.type === 'essay' ? '查看試題' : '開始作答'}
          </button>
        </div>
      ) : (
        <div className="rounded-lg border border-[#252525] bg-[#1a1a1a] p-5 text-center">
          <p className="text-sm text-[#555]">
            {year} 年 {SUBJECTS[subject].label} 試題資料整備中，敬請期待
          </p>
        </div>
      )}
    </div>
  )
}
