import { GetStaticPaths,GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Date from '@/components/date'
import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/posts'

export default function Post({
  postData,
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className='text-xl'>{postData.title}</h1>
      <div className='text-black/50'>
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
}: {
  params: { id: string }
}): Promise<{ props: { postData: { date: string; title: string; id: string; contentHtml: any } } }> => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
