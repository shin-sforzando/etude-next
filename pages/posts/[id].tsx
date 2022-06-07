import Date from '../../components/date'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({
  postData,
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles['heading-xl']}>{postData.title}</h1>
      <div className={utilStyles['light-text']}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{ props: { postData: { date: string; title: string; id: string; contentHtml: any } } }> => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
