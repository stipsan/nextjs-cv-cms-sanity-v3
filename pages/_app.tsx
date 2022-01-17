import 'tailwindcss/tailwind.css'
import 'react-spring-bottom-sheet/dist/style.css'
import '../style.css'

import CounterSnippet from 'components/CounterSnippet'
import { NextIntlProvider } from 'next-intl'
import { Toaster } from 'react-hot-toast'

function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <NextIntlProvider
        messages={pageProps.messages}
        now={new Date(pageProps.now)}
        timeZone="Europe/Oslo"
      >
        {process.env.NEXT_PUBLIC_COUNTER_DEV && <CounterSnippet />}
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  )
}

export default App
