import A1 from './components/A1'
import B1 from './components/B1'
import { useState, createContext } from 'react'

export const ColorContext = createContext('')
export const MessageContext = createContext('')

export default function App() {
  const [color] = useState('red')
  const [message] = useState('')
  return (
    <ColorContext.Provider value={color}>
      <MessageContext.Provider value={message}>
        <h1>App: {color}</h1>
        <A1 />
        <B1 />
      </MessageContext.Provider>
    </ColorContext.Provider>
  )
}
