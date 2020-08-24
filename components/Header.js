import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Header({ title }) {
  if (!title) {
    title = 'Frost';
  } else {
    title = title + ' | Frost';
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='fixed z-50 w-screen flex justify-between bg-black text-white shadow-md h-16'>
        <div className='mt-3 ml-3'>
          <Link href='/'>
            <a className='text-2xl font-bold' aria-label='Home'>
              Home
            </a>
          </Link>
        </div>
        <div className='m-4'>
          <Navbar />
        </div>
      </div>
    </>
  );
}
