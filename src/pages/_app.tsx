import { useState } from 'react';

import { QueryClient, Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <style jsx global>
            {`
              html {
                font-family: ${inter.style.fontFamily};
              }
            `}
          </style>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
