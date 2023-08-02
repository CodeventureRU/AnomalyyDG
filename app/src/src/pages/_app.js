import '@/styles/main.scss';
import '@/styles/layout.scss';
import '@/styles/page.scss';
import '@/styles/projects-slider.scss';
import '@/styles/image-slider.scss';
import '@/styles/animations.scss';
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}
