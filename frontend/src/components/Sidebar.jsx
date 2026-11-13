
import { Link } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose}></div>
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>

        <div className="sidebar-menu">
          <div className="sidebar-heading">
            <h4>MENU</h4>
            <button className="sidebar-close" onClick={onClose}>
              ✕
            </button>
          </div>

          <ul>
            <li><Link to="/" onClick={onClose}>Dashboard</Link></li>
            <li><Link to="/upload" onClick={onClose}>Upload Prescription</Link></li>
            <li><Link to="/history" onClick={onClose}>Prescription History</Link></li>
            <li><Link to="/chat" onClick={onClose}>AI Assistant</Link></li>
          </ul>
        </div>

        <div className="sidebar-bottom">
          <h4>SUPPORT</h4>
          <ul>
            <li><span>⚙</span> Settings</li>
            <li><span>?</span> Help Center</li>
          </ul>
        </div>

      </aside>
    </>
  )
}

export default Sidebar
