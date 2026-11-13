import "./PrescriptionHistory.css"
const PrescriptionHistory = () => {

  const prescriptions = [
    {
      id: 1,
      name: 'Prescription_01.pdf',
      date: '12 November 2026',
      status: 'Uploaded'
    },
    {
      id: 2,
      name: 'Prescription_02.jpg',
      date: '10 November 2026',
      status: 'Uploaded'
    }
  ]

  return (
    <div className="history-page">

      <h1>Prescription History</h1>
      <p>View your previously uploaded prescriptions.</p>

      <div className="history-card">

        <h2>My Prescriptions</h2>

        {prescriptions.map((prescription) => (
          <div className="prescription-item" key={prescription.id}>

            <div>
              <h3>{prescription.name}</h3>
              <p>{prescription.date}</p>
            </div>

            <span>{prescription.status}</span>

          </div>
        ))}

      </div>

    </div>
  )
}

export default PrescriptionHistory
