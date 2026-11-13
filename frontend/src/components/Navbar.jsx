
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <h2>MediRead <span>AI</span></h2>
      </div>

      <div className="navbar-right">

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          title="Toggle dark and light mode"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <span className="welcome-text">Welcome back!</span>

        <div className="profile">
          <div className="profile-avatar">U</div>
          <span>User</span>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
