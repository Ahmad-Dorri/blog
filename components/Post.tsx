import getForamattedDate from '@/lib/getForamattedDate';

type Props = {
  post: BlogPost & { contentHtml: string };
};

export default async function Post({ post }: Props) {
  const formattedDate = getForamattedDate(post.date);
  return (
    <div className="w-full p-4">
      <h1 className="text-3xl font-bold text-white mb-4 ">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
      <p className="mt-4 text-sm text-gray-500">{formattedDate}</p>
    </div>
  );
}
