import { useRef, useState, useEffect } from 'react'

export default function DebouncePage() {
  const debounce = useRef(null)
  const [text, setText] = useState('')

  const searchData = () => {
    if (!text) return

    console.log('... searching data ...')
    console.log(text)
  }

  useEffect(() => {
    if (debounce.current) clearInterval(debounce.current)

    debounce.current = setTimeout(searchData, 2000)

    return () => clearInterval(debounce.current)
  }, [text])

  return (
    <div>
      <h4>Debounce:</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}
