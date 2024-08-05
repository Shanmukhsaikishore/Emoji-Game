import './index.css'

const NavBar = props => {
  const {score, isLost, topScore} = props
  const className = !(!isLost && score !== 12) ? 'align-left' : ''
  return (
    <div className={`navbar ${className}`}>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="main-heading">Emoji Game</h1>
      </div>
      {!isLost && score !== 12 ? (
        <div className="scores-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      ) : null}
    </div>
  )
}

export default NavBar
