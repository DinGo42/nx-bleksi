import { Link } from '@/shared';

export default function Index() {
  return (
    <div className="bg-slate-800 flex items-center justify-center gap-10 w-screen h-screen text-white flex-col">
      <div className="flex gap-10 text-black">
        <Link href={'/profile'} styleType="PRIMARY">
          Go to profile page
        </Link>
        <Link href={'/home'} styleType="PRIMARY">
          Go to home page
        </Link>
      </div>
      <span>Hello</span>
    </div>
  );
}
