import '@/styles/globals.scss'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
export { reportWebVitals } from 'next-axiom'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
