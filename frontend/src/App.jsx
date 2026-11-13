
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Dashboard from './components/Dashboard'
import UploadPrescription from './pages/UploadPrescription'
import PrescriptionHistory from './pages/PrescriptionHistory'
import AIAssistant from './pages/AiAssistant'

import './App.css'

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('mediread-theme') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('mediread-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    )
  }

  return (
    <BrowserRouter>
      <div className={`app-container ${theme}-theme`}>

        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <div className="main-layout">

          <Sidebar />

          <div className="page-content">

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/upload" element={<UploadPrescription />} />
              <Route path="/history" element={<PrescriptionHistory />} />
              <Route path="/chat" element={<AIAssistant />} />
            </Routes>

          </div>

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
