import { useState } from 'react'
import { CheckCircle2, XCircle, ChevronLeft, BookCheck, RotateCcw } from 'lucide-react'
import { type MCQuestion } from '@/data/exams'

interface Props {
  questions: MCQuestion[]
  pointsPerQ: number
  title: string
  isDone: boolean
  onMarkDone: () => void
  onBack: () => void
  headerless?: boolean
}

const OPTS = ['A', 'B', 'C', 'D'] as const
type Opt = typeof OPTS[number]

export default function MCExamView({ questions, pointsPerQ, title, isDone, onMarkDone, onBack, headerless }: Props) {
  const [mode, setMode] = useState<'immediate' | 'submit'>('immediate')
  const [answers, setAnswers] = useState<Record<number, Opt>>({})
  const [submitted, setSubmitted] = useState(false)

  const answered = Object.keys(answers).length
  const correct = questions.filter((q) => answers[q.id] === q.answer).length
  const score = Math.round(correct * pointsPerQ * 10) / 10

  function handleSelect(qId: number, opt: Opt) {
    if (mode === 'immediate' && answers[qId]) return
    if (mode === 'submit' && submitted) return
    setAnswers((prev) => ({ ...prev, [qId]: opt }))
  }

  function reset() {
    setAnswers({})
    setSubmitted(false)
  }

  function switchMode(m: 'immediate' | 'submit') {
    setMode(m)
    reset()
  }

  const showScore = (mode === 'immediate' && answered > 0) || submitted

  return (
    <div className="space-y-4 max-w-3xl">
      {/* Header */}
      {!headerless && (
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="shrink-0 text-[#9b9b9b] hover:text-[#e6e6e6] transition-colors">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-[#e6e6e6] text-base font-semibold flex-1 truncate">{title}</h2>
          {showScore && (
            <span className="text-sm text-[#9b9b9b] shrink-0">
              <span className="text-[#4caf6e] font-semibold">{correct}</span>/{questions.length} 題
              <span className="ml-1">（{score} 分）</span>
            </span>
          )}
        </div>
      )}

      {/* Controls bar */}
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#373737] bg-[#252525] px-4 py-2.5">
        <div className="flex rounded border border-[#373737] overflow-hidden shrink-0">
          {(['immediate', 'submit'] as const).map((m) => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              className={`px-3 py-1 text-xs transition-colors ${
                mode === m ? 'bg-[#4a90d9] text-white' : 'text-[#9b9b9b] hover:bg-[#2f2f2f]'
              }`}
            >
              {m === 'immediate' ? '即時模式' : '交卷模式'}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-[#555] flex-1 hidden sm:block">
          {mode === 'immediate' ? '選答後立即顯示答案與解析' : `已作答 ${answered} / ${questions.length} 題`}
        </span>
        <button onClick={reset} className="text-[#555] hover:text-[#9b9b9b] transition-colors" title="重置">
          <RotateCcw size={13} />
        </button>
        <button
          onClick={onMarkDone}
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

      {/* Questions */}
      <div className="space-y-3">
        {questions.map((q, idx) => {
          const selected = answers[q.id]
          const isLocked = mode === 'immediate' ? !!selected : submitted
          const isCorrect = selected === q.answer

          return (
            <div
              key={q.id}
              className={`rounded-lg border p-4 transition-colors ${
                isLocked && selected
                  ? isCorrect
                    ? 'border-[#4caf6e]/25 bg-[#1e261e]'
                    : 'border-[#e05c5c]/25 bg-[#261e1e]'
                  : 'border-[#373737] bg-[#252525]'
              }`}
            >
              {/* Question text */}
              <div className="flex items-start gap-2 mb-3">
                <span className="text-[11px] font-mono text-[#555] shrink-0 mt-0.5 w-6 text-right">{idx + 1}.</span>
                <p className="text-sm text-[#e6e6e6] flex-1 whitespace-pre-line leading-relaxed">{q.text}</p>
                <span className="text-[10px] font-mono text-[#3a3a3a] shrink-0 hidden sm:block">{q.topic}</span>
              </div>

              {/* Options */}
              <div className="space-y-1.5 ml-8">
                {OPTS.map((label, i) => {
                  const optText = q.options[i]
                  const isSel = selected === label
                  const isAns = q.answer === label

                  let cls = 'border-[#373737] text-[#d0d0d0] hover:bg-[#2f2f2f] hover:border-[#4a4a4a]'
                  if (isLocked) {
                    if (isAns) cls = 'border-[#4caf6e]/50 bg-[#4caf6e]/8 text-[#4caf6e]'
                    else if (isSel) cls = 'border-[#e05c5c]/50 bg-[#e05c5c]/8 text-[#e05c5c]'
                    else cls = 'border-[#2a2a2a] text-[#555]'
                  } else if (isSel) {
                    cls = 'border-[#4a90d9] bg-[#4a90d9]/10 text-[#4a90d9]'
                  }

                  return (
                    <button
                      key={label}
                      onClick={() => handleSelect(q.id, label)}
                      className={`w-full flex items-start gap-2.5 px-3 py-2 rounded border text-left text-sm transition-all ${cls}`}
                    >
                      <span className="font-semibold text-[11px] shrink-0 mt-0.5 w-4">{label}</span>
                      <span className="flex-1 leading-snug">{optText}</span>
                      {isLocked && isAns && <CheckCircle2 size={13} className="shrink-0 mt-0.5 text-[#4caf6e]" />}
                      {isLocked && isSel && !isCorrect && <XCircle size={13} className="shrink-0 mt-0.5 text-[#e05c5c]" />}
                    </button>
                  )
                })}
              </div>

              {/* Explanation */}
              {isLocked && selected && q.explanation && (
                <div className="mt-3 ml-8 px-3 py-2 rounded bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-[#9b9b9b] leading-relaxed">
                  <span className="text-[#e8a94e] font-medium">解析：</span>
                  {q.explanation}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Submit button (submit mode) */}
      {mode === 'submit' && !submitted && (
        <div className="flex justify-center py-2">
          <button
            onClick={() => setSubmitted(true)}
            disabled={answered === 0}
            className="px-8 py-3 rounded-lg bg-[#4a90d9] text-white text-sm font-medium hover:bg-[#3a7bc8] disabled:opacity-40 disabled:cursor-not-allowed shadow-lg transition-colors"
          >
            交卷（已作答 {answered} / {questions.length} 題）
          </button>
        </div>
      )}

      {/* Result summary (submit mode) */}
      {submitted && (
        <div className="rounded-lg border border-[#4a90d9]/30 bg-[#4a90d9]/5 p-6 text-center space-y-1">
          <p className="text-3xl font-bold text-[#e6e6e6]">{score} <span className="text-base font-normal text-[#9b9b9b]">分</span></p>
          <p className="text-sm text-[#9b9b9b]">答對 {correct} 題・答錯 {answered - correct} 題・未作答 {questions.length - answered} 題</p>
          <button
            onClick={reset}
            className="text-xs text-[#4a90d9] hover:underline mt-1 inline-block"
          >
            再試一次
          </button>
        </div>
      )}
    </div>
  )
}
