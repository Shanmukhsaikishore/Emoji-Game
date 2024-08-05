import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain} = props
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const headingText = score === 12 ? 'You Won' : 'You Lose'
  const paraText = score === 12 ? 'Best Score' : 'Score'

  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  return (
    <div className="card-container">
      <div className="text-container">
        <h1 className="heading">{headingText}</h1>
        <p className="para">{paraText}</p>
        <p className="score-display">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
