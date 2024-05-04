import Link from "next/link";

export default function NotFound() {
  return (
    <section className='max-w-[980px] my-0 mx-auto py-8'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </section>
  );
}
