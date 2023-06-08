import Image from 'next/image';
import myprofileImage from '@/public/images/photo_2023-02-02_09-21-09.jpg';
export default function ProfileImage() {
  return (
    <div className="avatar grid place-items-center">
      <div className="rounded-full ring  ring-offset-base-100 ring-offset-2">
        <Image
          priority={true}
          width={200}
          height={200}
          alt="my profile image"
          src={myprofileImage}
        />
      </div>
    </div>
  );
}
