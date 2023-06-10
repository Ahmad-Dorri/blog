import getForamattedDate from '@/lib/getForamattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
type Props = {
  params: {
    postId: string;
  };
};
export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}
export function generateMetadata({ params: { postId } }: Props): Metadata {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: 'the page not found',
    };
  }
  return {
    title: post.title,
  };
}
export default async function Post({ params: { postId } }: Props) {
  const posts = getSortedPostsData();
  if (!posts.find((post) => post.id === postId)) {
    notFound;
  }
  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getForamattedDate(date);
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-10 text-white">{title}</h1>
      <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <Link
        href="/"
        className="text-sm text-gray-400 my-10 underline uppercase font-bold  ">
        Go back to home
      </Link>
      <p className="text-sm text-gray-400 mt-10 ">{pubDate}</p>
    </main>
  );
}
