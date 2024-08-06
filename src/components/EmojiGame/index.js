/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}


*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {prevClickedEmojis: [], score: 0, topScore: 0, isLost: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlayAgain = () => {
    this.setState(prevState => ({
      prevClickedEmojis: [],
      score: 0,
      topScore:
        prevState.score > prevState.topScore
          ? prevState.score
          : prevState.topScore,
      isLost: false,
    }))
  }

  onClickEmoji = uid => {
    const {prevClickedEmojis, score} = this.state
    if (prevClickedEmojis.length === 0) {
      this.setState({prevClickedEmojis: [uid], score: 1})
    } else {
      const isEmojiContains = prevClickedEmojis.filter(
        eachItem => eachItem === uid,
      )
      if (isEmojiContains.length === 0) {
        this.setState(prevState => ({
          prevClickedEmojis: [...prevState.prevClickedEmojis, uid],
          score: prevState.score + 1,
        }))
      } else {
        this.setState({
          isLost: true,
        })
      }
    }
  }

  render() {
    const {score, topScore, isLost} = this.state
    const {emojisList} = this.props
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isLost={isLost} />
        <div className="bottom-section">
          {!isLost && score !== 12 ? (
            <ul className="emojis-container">
              {emojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  emojiDetails={eachItem}
                  onClickEmoji={this.onClickEmoji}
                  shuffledEmojisList={this.shuffledEmojisList}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard score={score} onPlayAgain={this.onPlayAgain} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
