import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [connectData, setConnectData] = useState<{
    address: string;
    provider: string;
  } | null>(null);

  useEffect(() => {
    const localConnectData = localStorage.getItem("connectData");
    if (localConnectData) setConnectData(JSON.parse(localConnectData));
  }, []);

  return (
    <div>
      <Header connectData={connectData} setConnectData={setConnectData} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
