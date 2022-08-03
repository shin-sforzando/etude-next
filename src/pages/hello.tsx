import { useEffect, useState } from 'react'
import { log } from 'next-axiom'

export default function Hello() {
  const [data, setData] = useState({ text: '' })
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
  }, [])
  log.info(`Data: ${JSON.stringify(data)}`)

  return <div>{data.text}</div>
}
