import Link from 'next/link';
import { NextPageContext } from 'next';

interface Props {
  statusCode: number;
}

function ErrorPage({ statusCode }: Props) {
  return (
    <div>
      <h1>{statusCode}</h1>
      <p>Oops! Something went wrong.</p>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
