import Head from 'next/head'
import Link from 'next/link'
import Date from '/components/date'
import Layout, { siteTitle } from '/components/layout'
import utilStyles from '/styles/utils.module.scss'
import { getSortedPostsData } from '/lib/posts'
import { GetStaticProps } from 'next'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles['heading-md']}>
        <p>
          Hello, I&#39;m <strong>shin-sforzando</strong>. I&#39;m a software engineer.
        </p>
      </section>
      <section className={`${utilStyles['heading-md']} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles['heading-lg']}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles['list-item']} key={id}>
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
