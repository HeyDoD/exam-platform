import { useState, Fragment } from 'react'
import { BookOpen, CheckCircle2, Circle, ChevronDown, ChevronRight, Lightbulb, Target, GraduationCap } from 'lucide-react'
import { SUBJECTS, type SubjectKey } from '@/data/subjects'
import { useProgress } from '@/hooks/useProgress'
import { getResource } from '@/data/resources'
import { getLecture } from '@/data/lectures'

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return (
    <Fragment>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
          ? <strong key={i} className="text-[#e6e6e6] font-medium">{p.slice(2, -2)}</strong>
          : <span key={i}>{p}</span>
      )}
    </Fragment>
  )
}

const TABS: { key: SubjectKey; shortLabel: string }[] = [
  { key: 'A', shortLabel: '科目 A' },
  { key: 'B', shortLabel: '科目 B' },
  { key: 'common', shortLabel: '共同科目' },
]

export default function StudyCenter() {
  const [activeSubject, setActiveSubject] = useState<SubjectKey>('A')
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const { completed, stats, markTopic } = useProgress()

  const subject = SUBJECTS[activeSubject]
  const topics = subject.topics

  function toggleExpand(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function toggleDone(topicId: string) {
    markTopic(topicId, !completed.topics[topicId])
  }

  return (
    <div className="space-y-5 max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <BookOpen size={20} className="text-[#4caf6e]" />
        <h2 className="text-[#e6e6e6] text-xl font-semibold">學習園地</h2>
      </div>

      {/* 科目 Tabs */}
      <div className="flex gap-2">
        {TABS.map(({ key, shortLabel }) => {
          const sub = SUBJECTS[key]
          const pct = Math.round(stats[key] * 100)
          const isActive = activeSubject === key
          return (
            <button
              key={key}
              onClick={() => setActiveSubject(key)}
              className={`flex-1 sm:flex-none flex flex-col items-center gap-0.5 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                isActive
                  ? ''
                  : 'border-[#373737] text-[#9b9b9b] bg-[#252525] hover:bg-[#2f2f2f]'
              }`}
              style={
                isActive
                  ? { backgroundColor: sub.color + '22', borderColor: sub.color, color: sub.color }
                  : {}
              }
            >
              <span>{shortLabel}</span>
              <span className="text-[10px] opacity-70">{pct}% 完成</span>
            </button>
          )
        })}
      </div>

      {/* 科目說明 */}
      <div className="rounded-lg border border-[#373737] bg-[#252525] px-5 py-3 flex items-center justify-between">
        <div>
          <span className="text-sm font-medium" style={{ color: subject.color }}>
            {subject.label}
          </span>
          <span className="text-[#9b9b9b] text-sm ml-2">— {subject.subtitle}</span>
        </div>
        <span className="text-xs text-[#9b9b9b]">
          {topics.filter((t) => completed.topics[t.id]).length} / {topics.length} 章節完成
        </span>
      </div>

      {/* 章節列表 */}
      <div className="space-y-2">
        {topics.map((topic) => {
          const done = !!completed.topics[topic.id]
          const isOpen = expanded.has(topic.id)
          const resource = getResource(topic.id)
          const lecture = getLecture(topic.id)

          return (
            <div
              key={topic.id}
              className={`rounded-lg border transition-colors ${
                done ? 'border-[#2a3a2a] bg-[#1e261e]' : 'border-[#373737] bg-[#252525]'
              }`}
            >
              {/* Topic header row */}
              <div className="flex items-center gap-3 px-4 py-3">
                {/* Done toggle */}
                <button
                  onClick={() => toggleDone(topic.id)}
                  className="shrink-0 transition-colors"
                  title={done ? '取消完成' : '標記完成'}
                >
                  {done ? (
                    <CheckCircle2 size={18} className="text-[#4caf6e]" />
                  ) : (
                    <Circle size={18} className="text-[#555]" />
                  )}
                </button>

                {/* Topic title — click to expand */}
                <button
                  className="flex-1 flex items-center gap-2 text-left"
                  onClick={() => toggleExpand(topic.id)}
                >
                  <span className="text-[10px] font-mono text-[#444] shrink-0">{topic.id}</span>
                  <span
                    className={`text-sm font-medium ${
                      done ? 'text-[#9b9b9b] line-through' : 'text-[#e6e6e6]'
                    }`}
                  >
                    {topic.title}
                  </span>
                  <span className="text-[10px] text-[#444] ml-auto shrink-0">
                    {topic.subtopics.length} 子題
                  </span>
                  <span className="shrink-0 text-[#555]">
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </span>
                </button>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div className="border-t border-[#2a2a2a]">
                  {/* Subtopics */}
                  <div className="px-5 py-3 border-b border-[#242424]">
                    <p className="text-[10px] text-[#555] uppercase tracking-wider mb-2">涵蓋範圍</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {topic.subtopics.map((sub, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#9b9b9b]">
                          <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ backgroundColor: subject.color + '99' }}
                          />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {resource && (
                    <>
                      {/* Key Points */}
                      <div className="px-5 py-3 border-b border-[#242424]">
                        <p className="text-[10px] text-[#555] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Lightbulb size={10} />
                          重點摘要
                        </p>
                        <ul className="space-y-2">
                          {resource.keyPoints.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#c0c0c0] leading-relaxed">
                              <span className="shrink-0 mt-1 text-[8px] font-mono text-[#555]">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Exam Tips */}
                      {resource.examTips && resource.examTips.length > 0 && (
                        <div className={`px-5 py-3 ${lecture ? 'border-b border-[#242424]' : ''}`}>
                          <p className="text-[10px] text-[#e8a94e]/70 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Target size={10} />
                            歷屆考點
                          </p>
                          <ul className="space-y-1.5">
                            {resource.examTips.map((tip, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#9b9b9b] leading-relaxed">
                                <span className="shrink-0 text-[#e8a94e]/50 mt-0.5">›</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}

                  {/* Lecture Notes (from NotebookLM) */}
                  {lecture && (
                    <div className="px-5 py-3 space-y-4 bg-[#1c1c2e]/40 border-t border-[#2a2a3a]">
                      <p className="text-[10px] text-[#7c8cff]/70 uppercase tracking-wider flex items-center gap-1.5">
                        <GraduationCap size={10} />
                        完整講義（110–114年試題精析）
                      </p>

                      {lecture.coreConcepts.length > 0 && (
                        <div>
                          <p className="text-[10px] text-[#7c8cff]/50 mb-1.5">核心概念</p>
                          <ul className="space-y-1.5">
                            {lecture.coreConcepts.map((c, i) => (
                              <li key={i} className="text-xs text-[#a0a8c8] leading-relaxed flex items-start gap-2">
                                <span className="shrink-0 text-[#7c8cff]/40 mt-0.5">▸</span>
                                <InlineMarkdown text={c} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {lecture.principles.length > 0 && (
                        <div>
                          <p className="text-[10px] text-[#7c8cff]/50 mb-1.5">重要原理與公式</p>
                          <ul className="space-y-1.5">
                            {lecture.principles.map((p, i) => (
                              <li key={i} className="text-xs text-[#a0a8c8] leading-relaxed flex items-start gap-2">
                                <span className="shrink-0 text-[#7c8cff]/40 mt-0.5">▸</span>
                                <InlineMarkdown text={p} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {lecture.examHighlights.length > 0 && (
                        <div>
                          <p className="text-[10px] text-[#7c8cff]/50 mb-1.5">高頻考點（含年份）</p>
                          <ul className="space-y-1">
                            {lecture.examHighlights.map((h, i) => (
                              <li key={i} className="text-xs text-[#a0a8c8] leading-relaxed flex items-start gap-2">
                                <span className="shrink-0 text-[#4c6fff]/60 mt-0.5">★</span>
                                <InlineMarkdown text={h} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
