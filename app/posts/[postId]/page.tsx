import Post from '@/components/Post';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
interface Props {
  params: {
    postId: string;
  };
}

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}
export async function generateMetadata({
  params: { postId },
}: Props): Promise<Metadata> {
  const post = await getPostData(postId);
  if (!post) {
    return {
      title: 'not found',
    };
  }
  return {
    title: post.title,
    description: post.title,
  };
}
export default async function PostPage({ params: { postId } }: Props) {
  const post = await getPostData(postId);
  if (!post) {
    notFound();
  }
  return <Post post={post} />;
}
