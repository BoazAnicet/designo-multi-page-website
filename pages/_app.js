import "../styles/globals.scss";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
}

export default MyApp;
