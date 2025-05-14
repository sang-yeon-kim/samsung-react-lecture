import { useColorStore } from '../stores/color'

export default function A2() {
  const color = useColorStore(state => state.color)
  return (
    <>
      <h2>A2: {color}</h2>
    </>
  )
}
