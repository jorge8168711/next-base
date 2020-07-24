import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-300'>
      <Head>
        <title>Initial next base</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-8 mb-8 bg-white rounded shadow'>
        <h1 className='mb-4'>Next.js base project</h1>
        <ul>
          <li>- eslint config airbnb</li>
          <li>- prettier</li>
          <li>- tailwindcss</li>
          <li>- nprogress</li>
        </ul>
      </main>

      <footer>
        <a
          className='flex flex-col items-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by
          <img src='/vercel.svg' alt='Vercel Logo' className='w-16' />
        </a>
      </footer>
    </div>
  );
}
