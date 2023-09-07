import type { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useState } from "react";

interface GlobalContextData {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<GlobalContextData | null>(
  null,
);

function GlobalApp({ Component, pageProps }: AppProps) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider value={{ collapsed, setCollapsed }}>
      <div className="w-screen h-screen">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </div>
    </GlobalContext.Provider>
  );
}

export default GlobalApp;
