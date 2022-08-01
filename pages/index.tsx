import Head from 'next/head'
import Link from 'next/link'
import Date from '/components/date'
import Layout, { siteTitle } from '/components/layout'
import { getSortedPostsData } from '/lib/posts'
import { GetStaticProps } from 'next'
import styled from 'styled-components'

const H2 = styled.h2`
  color: red;
`

export default function Home({ allPostsData }): any {
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
        <H2 className='text-xl'>Blog</H2>
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
