
import { useState } from 'react'
import './UploadPrescription.css'

const UploadPrescription = () => {

  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleRemove = () => {
    setFile(null)
  }

  return (
    <div className="upload-page">

      <h1>Upload Prescription</h1>
      <p>Upload your doctor's prescription for AI analysis.</p>

      <div className="prescription-upload-box">

        <h2>Select Your Prescription</h2>

        <p>Choose an image or PDF file from your device.</p>

        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
        />

        {file && (
          <div className="file-details">
            <p>Selected file: {file.name}</p>

            <button onClick={handleRemove}>
              Remove File
            </button>
          </div>
        )}

        <button disabled={!file} className="upload-button">
          Upload Prescription
        </button>

      </div>

    </div>
  )
}

export default UploadPrescription
