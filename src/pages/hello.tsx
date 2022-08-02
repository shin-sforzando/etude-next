import { useEffect, useState } from 'react'

export default function Hello() {
  const [data, setData] = useState({ text: '' })
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
  }, [])

  return <div>{data.text}</div>
}
