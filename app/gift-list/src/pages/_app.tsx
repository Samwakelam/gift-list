import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { setup, tw } from 'twind';
import withTwindApp from '@twind/next/app';

import { globalStyles } from '@sam/library';

import themeConfig from '../twind.config';

import '../styles/reset.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  setup(themeConfig);

  return (
    <>
      <Head>
        <title>Gift List</title>
        {/* <link rel="icon" href="/snd-logo.png" type="image/x-icon" /> */}

        {/* <link rel="manifest" href="/manifest.json" /> */}

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <meta name="theme-color" content="#67acd4" /> */}
      </Head>
      <div className={tw(globalStyles)}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default withTwindApp(themeConfig, App);
