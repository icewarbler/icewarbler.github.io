'use client'

import StickyHeader from '../components/StickyHeader'
import Banner from '@/components/Banner'
import Middle from '@/components/Middle'
import End from '@/components/End'

// type BoxProps = {
//   children?: React.ReactNode;
//   className?: string;
// };

// function Box({ children, className = "" }: BoxProps) {
//   return (
//     <div className={`w-[700px] h-screen bg-gray-200 border border-gray-400 rounded-md p-4 shadow-md ${className}`}>
//       {children}
//     </div>
//   );
// }

export default function Home() {
  return (
    <>
    <StickyHeader />
    <Banner />
    <Middle />
    <End />
    {/* <div className="max-w-9/10 mx-auto px-4"> 
        <div className="mt-[-10px] font-sans grid grid-rows-[1fr_20px] p-8 pb-20 gap-16 sm:p-20 h-screen w-full">
        <main className="col-span-full flex flex-col gap-[32px] h-full">
        </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    </div> */}
    </>
  );
}
