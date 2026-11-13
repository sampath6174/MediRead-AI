
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div>
        <h4>MENU</h4>

        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/upload">Upload Prescription</Link></li>
          <li><Link to="/history">Prescription History</Link></li>
          <li><Link to="/chat">AI Assistant</Link></li>
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
  )
}

export default Sidebar
