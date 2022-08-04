import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { classnames, fontSize } from 'tailwindcss-classnames'

import Date from '@/components/date'
import Layout, { siteTitle } from '@/components/layout'
import { StyledButton } from '@/components/StyledButton'
import { getSortedPostsData, PostData } from '@/lib/posts'

const xlStyle = classnames(fontSize('text-xl'))

export default function Home(props: { allPostsData: PostData[] }): JSX.Element {
  const { allPostsData } = props
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-lg'>
        <p>
          Hello, I&#39;m <strong>shin-sforzando</strong>. I&#39;m a software engineer.
        </p>
      </section>
      <section className='pt-1 text-lg'>
        <h1 className={xlStyle}>Blog</h1>
        <ul className='list-none'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='m-5' key={id}>
              <Link href='/posts/[id]' as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className='text-black/50'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <Link href={'/ssr'}>Go to SSR</Link>
        <StyledButton variant='success'>Styled Button</StyledButton>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData },
  }
}
