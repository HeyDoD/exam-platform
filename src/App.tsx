import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '@/components/Layout/AppLayout'
import Dashboard from '@/pages/Dashboard'
import StudyCenter from '@/pages/StudyCenter'
import Exams from '@/pages/Exams'

export default function App() {
  return (
    <BrowserRouter basename="/exam-platform">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="study" element={<StudyCenter />} />
          <Route path="exams" element={<Exams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
