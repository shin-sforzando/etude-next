import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import utilsStyles from '@/styles/utils.module.scss'

import styles from './layout.module.scss'

const name = 'shin-sforzando'
export const siteTitle = 'Etude of Next.js'

export default function Layout({ children, home }: { children: ReactNode; home?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.png'
              className={utilsStyles.profile}
              height={144}
              width={144}
              alt={name}
            />
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.png'
                  className={utilsStyles.profile}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className='text-lg'>
              <Link href='/'>
                <a className='text-inherit'>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles['back-to-home']}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
