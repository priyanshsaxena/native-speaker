import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Content = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the topic</p>
    </div>
  );
};

const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
