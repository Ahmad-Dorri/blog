import Link from 'next/link';
import getForamattedDate from '@/lib/getForamattedDate';
type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getForamattedDate(date);
  return (
    <li>
      <Link href={`posts/${id}`}>
        <div className="flex flex-col gap-2 text-left md:text-center md:flex-row">
          <p className="text-white text-base ">{title}</p>
          <p className="text-sm">{formattedDate}</p>
        </div>
      </Link>
    </li>
  );
}
