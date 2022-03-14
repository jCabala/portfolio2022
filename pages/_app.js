import Theme from '../styles/theme';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
