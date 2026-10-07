import ReduxProvider from "../redux/reduxProvider";
import "../styles/master.scss";

export default function PagesApp({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
