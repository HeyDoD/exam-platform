import { ChevronLeft, BookCheck } from 'lucide-react'
import { type EssayQuestion } from '@/data/exams'

interface Props {
  questions: EssayQuestion[]
  title: string
  isDone: boolean
  onMarkDone: () => void
  onBack: () => void
  headerless?: boolean
}

const CN_NUMS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

export default function EssayExamView({ questions, title, isDone, onMarkDone, onBack, headerless }: Props) {
  return (
    <div className="space-y-4 max-w-3xl">
      {/* Header */}
      {!headerless && (
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="shrink-0 text-[#9b9b9b] hover:text-[#e6e6e6] transition-colors">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-[#e6e6e6] text-base font-semibold flex-1 truncate">{title}</h2>
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
      )}

      <p className="text-xs text-[#555] border border-[#2a2a2a] rounded px-3 py-2 bg-[#1e1e1e]">
        申論題須在答案卷上作答。此頁面供閱讀題目與確認配分使用，讀完後可標記完成。
      </p>

      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={q.id} className="rounded-lg border border-[#373737] bg-[#252525] overflow-hidden">
            {/* Question header */}
            <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-[#2a2a2a]">
              <div className="flex items-start gap-2">
                <span className="text-sm font-medium text-[#e8a94e] shrink-0">
                  {CN_NUMS[idx] ?? idx + 1}、
                </span>
                <p className="text-sm text-[#e6e6e6] leading-relaxed whitespace-pre-line">{q.text}</p>
              </div>
              <span className="text-sm font-medium text-[#e8a94e] shrink-0">
                {q.points} 分
              </span>
            </div>

            {/* Subquestions */}
            {q.subquestions && q.subquestions.length > 0 && (
              <div className="px-5 py-3 space-y-2.5">
                {q.subquestions.map((sub) => (
                  <div key={sub.id} className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#4a90d9] shrink-0 mt-0.5 w-8">
                      ({sub.id.split('-')[1]})
                    </span>
                    <p className="text-sm text-[#9b9b9b] flex-1 leading-relaxed">{sub.text}</p>
                    <span className="text-xs text-[#555] shrink-0 font-mono">{sub.points} 分</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
