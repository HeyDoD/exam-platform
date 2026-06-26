import { useState, useEffect } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { useAuth } from './useAuth'
import { SUBJECTS } from '@/data/subjects'

export interface ProgressStats {
  A: number
  B: number
  common: number
  overall: number
}

export interface CompletedItems {
  topics: Record<string, boolean>
  exams: Record<string, boolean>
}

const LOCAL_KEY = 'completed_items'

function loadLocal(): CompletedItems {
  try {
    const raw = localStorage.getItem(LOCAL_KEY)
    return raw ? JSON.parse(raw) : { topics: {}, exams: {} }
  } catch {
    return { topics: {}, exams: {} }
  }
}

function calcStats(completed: CompletedItems): ProgressStats {
  const topicCounts = { A: 0, B: 0, common: 0 }
  const topicDone = { A: 0, B: 0, common: 0 }

  for (const [key, sub] of Object.entries(SUBJECTS)) {
    const k = key as 'A' | 'B' | 'common'
    topicCounts[k] = sub.topics.length
    topicDone[k] = sub.topics.filter((t) => completed.topics[t.id]).length
  }

  const rates = {
    A: topicCounts.A ? topicDone.A / topicCounts.A : 0,
    B: topicCounts.B ? topicDone.B / topicCounts.B : 0,
    common: topicCounts.common ? topicDone.common / topicCounts.common : 0,
  }

  return {
    ...rates,
    overall: rates.A * SUBJECTS.A.weight + rates.B * SUBJECTS.B.weight + rates.common * SUBJECTS.common.weight,
  }
}

export function useProgress() {
  const { user } = useAuth()
  const [completed, setCompleted] = useState<CompletedItems>(loadLocal())
  const stats = calcStats(completed)

  useEffect(() => {
    if (!user) {
      setCompleted(loadLocal())
      return
    }
    const ref = doc(db, 'users', user.uid, 'progress', 'items')
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setCompleted(snap.data() as CompletedItems)
      }
    })
    return unsub
  }, [user])

  async function markTopic(topicId: string, done: boolean) {
    const next = { ...completed, topics: { ...completed.topics, [topicId]: done } }
    setCompleted(next)
    localStorage.setItem(LOCAL_KEY, JSON.stringify(next))
    if (user) {
      await setDoc(doc(db, 'users', user.uid, 'progress', 'items'), next, { merge: true })
    }
  }

  async function markExam(examKey: string, done: boolean) {
    const next = { ...completed, exams: { ...completed.exams, [examKey]: done } }
    setCompleted(next)
    localStorage.setItem(LOCAL_KEY, JSON.stringify(next))
    if (user) {
      await setDoc(doc(db, 'users', user.uid, 'progress', 'items'), next, { merge: true })
    }
  }

  return { completed, stats, markTopic, markExam }
}
