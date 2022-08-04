import { log } from 'next-axiom'
import { useEffect, useState } from 'react'

const Hello = () => {
  log.info('hello')
  const [data, setData] = useState({ text: '' })
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => log.error(err))
  }, [])

  return <>{data.text}</>
}

export default Hello
