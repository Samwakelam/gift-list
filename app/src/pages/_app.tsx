import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { setup } from 'twind';
import withTwindApp from '@twind/next/app';

import { themeConfig } from '@sam/library';

import '../styles/reset.css';
import '../styles/tokens.css';
import '../styles/global.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
    setup;

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
            <Component {...pageProps} />
        </>
    );
}

export default withTwindApp(themeConfig, App);
