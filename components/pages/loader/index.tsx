'use client';
import { Rings } from 'react-loader-spinner';

export default function LoaderPage() {
  return (
    <>
      <main className="w-full h-screen bg-white flex items-center justify-center">
        <Rings
          height="80"
          width="80"
          color="#2E5DF8"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </main>
    </>
  );
}
