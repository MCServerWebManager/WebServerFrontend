import { AppProps } from 'next/app';
import '../styles/globals.css';

function GlobalApp({ Component, pageProps }: AppProps) {
    return (
        <div className={"w-full h-full"}>
            <Component {...pageProps} />
        </div>
    );
}

export default GlobalApp;