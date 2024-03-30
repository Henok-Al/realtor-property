import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-blue-300"><h1 className='text-3xl'>Welcome</h1>
    <Link href='/properties'>Properties</Link></div>
  );
}
