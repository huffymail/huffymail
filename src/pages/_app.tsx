import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
