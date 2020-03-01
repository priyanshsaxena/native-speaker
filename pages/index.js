import Layout from '../components/Layout';
import Link from 'next/link';

const TopicLink = props => (
  <li>
    <Link href={`/topic?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Index() {
  return (
    <Layout>
    <h1>Hello Next.js 👋</h1>
        <h1>Topics</h1>
        <ul>
            <TopicLink title="Counting" />
            <TopicLink title="What else ?" />
        </ul>
    </Layout>
  );
}

