
import { useState } from 'react'

const Dashboard = () => {

  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0]

    if (!selectedFile) return

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'application/pdf'
    ]

    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Only JPG, PNG and PDF files are allowed')
      setFile(null)
      event.target.value = ''
      return
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5 MB')
      setFile(null)
      event.target.value = ''
      return
    }

    setError('')
    setFile(selectedFile)
  }

  const handleRemoveFile = () => {
    setFile(null)
    setError('')
  }

  return (
    <main className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Manage and understand your medical prescriptions.</p>
        </div>

        <label className="primary-btn">
          + New Prescription
          <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileChange}
              hidden
            />
        </label>
      </div>

      <div className="stats-container">

        <div className="stat-card">
          <div className="stat-icon green">▤</div>
          <div>
            <p>Total Prescriptions</p>
            <h2>0</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">✧</div>
          <div>
            <p>AI Analyses</p>
            <h2>0</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">◷</div>
          <div>
            <p>Recent Uploads</p>
            <h2>0</h2>
          </div>
        </div>

      </div>

      <section className="upload-section">

        <h2>Upload Your Prescription </h2>

        <p>
          Upload your doctor's prescription for AI analysis.
        </p>

        <div className="upload-box">

          <div className="upload-icon">↑</div>

          <h3>Upload your prescription</h3>

          <p>Select a JPG, PNG or PDF file</p>

          <label className="primary-btn">
            Choose File

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileChange}
              hidden
            />
          </label>

          <small>Maximum file size: 5 MB</small>

          {error && (
            <p className="error-message">{error}</p>
          )}

          {file && (
            <div className="selected-file">

              <p>Selected: {file.name}</p>

              <button
                onClick={handleRemoveFile}
                className="remove-btn"
              >
                Remove File
              </button>

            </div>
          )}

        </div>

      </section>

      <section className="recent-section">

        <div className="section-header">
          <h2>Recent Prescriptions</h2>
          <span>View All →</span>
        </div>

        <div className="empty-state">
          <div className="empty-icon">▤</div>

          <h3>No prescriptions yet</h3>

          <p>Your uploaded prescriptions will appear here.</p>
        </div>

      </section>

    </main>
  )
}

export default Dashboard
