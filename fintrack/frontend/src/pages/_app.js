import ReduxProvider from "../redux/reduxProvider";

export default function PagesApp({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
