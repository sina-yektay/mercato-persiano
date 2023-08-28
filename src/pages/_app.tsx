import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "../../styles/globals.css";
import { useTranslation } from "@/hooks/useTranslations";
function App({ Component, pageProps }: AppProps) {
  const { tReady } = useTranslation();

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
