
import { useState } from 'react'
import "./AiAssistant.css"

const AIAssistant = () => {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      text: 'Hello! I am your MediRead AI assistant. How can I help you?',
      sender: 'ai'
    }
  ])

  const handleSend = () => {

    if (message.trim() === '') return

    setMessages([
      ...messages,
      {
        text: message,
        sender: 'user'
      }
    ])

    setMessage('')
  }

  return (
    <div className="chat-page">

      <h1>AI Assistant</h1>
      <p>Ask questions about medical prescriptions.</p>

      <div className="chat-container">

        <div className="chat-messages">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}

        </div>

        <div className="chat-input">

          <input
            type="text"
            placeholder="Ask your question..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSend()
              }
            }}
          />

          <button onClick={handleSend}>
            Send
          </button>

        </div>

      </div>

    </div>
  )
}

export default AIAssistant
