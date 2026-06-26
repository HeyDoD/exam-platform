import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { useAuth } from './useAuth'

export interface StudyPlan {
  startDate: string
  examDate: string
}

const LOCAL_KEY = 'study_plan'

function loadLocal(): StudyPlan | null {
  try {
    const raw = localStorage.getItem(LOCAL_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveLocal(plan: StudyPlan) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(plan))
}

export function useStudyPlan() {
  const { user } = useAuth()
  const [plan, setPlan] = useState<StudyPlan | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      if (user) {
        try {
          const ref = doc(db, 'users', user.uid, 'settings', 'studyPlan')
          const snap = await getDoc(ref)
          if (!cancelled) {
            setPlan(snap.exists() ? (snap.data() as StudyPlan) : loadLocal())
          }
        } catch {
          if (!cancelled) setPlan(loadLocal())
        }
      } else {
        if (!cancelled) setPlan(loadLocal())
      }
      if (!cancelled) setLoading(false)
    }

    load()
    return () => { cancelled = true }
  }, [user])

  async function savePlan(next: StudyPlan) {
    setPlan(next)
    saveLocal(next)
    if (user) {
      try {
        await setDoc(doc(db, 'users', user.uid, 'settings', 'studyPlan'), next)
      } catch {
        // localStorage 已存，Firebase 失敗不影響使用
      }
    }
  }

  return { plan, loading, savePlan }
}
