import ProfileImage from './components/ProfileImage';
export default function HomePage() {
  return (
    <main className="mx-auto">
      <p className="text-center p-4 text-[18px] mb-10 ">
        Hello and welocome I&apos;m{' '}
        <span className="font-bold text-[22px]"> Ahmad Dorri 👋.</span>
      </p>
      <ProfileImage />
    </main>
  );
}
