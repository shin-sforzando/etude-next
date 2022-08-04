import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props
  return (
    <>
      <Head>
        <title>Static Site Generation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>This page was generated during build using Static Site Generation.</p>
        <p>{message}</p>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `Generated: ${timestamp}.`
  return {
    props: {
      message,
    },
  }
}

export default SSG
