import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji, shuffledEmojisList} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const clickEmoji = () => {
    onClickEmoji(id)
    shuffledEmojisList()
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
