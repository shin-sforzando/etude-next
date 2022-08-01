import { useEffect, useState } from 'react'

export default function Hello() {
  const [data, setData] = useState({ text: '' })
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return <div>{data.text}</div>
}
