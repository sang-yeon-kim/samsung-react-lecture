import { useState } from 'react'

export default function App() {
  const title = 'World'
  // let count = 0
  // const [데이터이름, 데이터변경함수] = useState<데이터타입>(기본값)
  const [count, setCount] = useState(0)

  function handleClick() {
    const newCount = count + 1
    setCount(newCount)
    console.log('count:', newCount)
  }

  return (
    <>
      <h1>Hello {title}?!</h1>
      <h2 onClick={handleClick}>Count: {count}</h2>
    </>
  )
}
