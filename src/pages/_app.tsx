import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Nunito} from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const nunito = Nunito({subsets: ['latin'], weight: 'variable'})

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  )
}
