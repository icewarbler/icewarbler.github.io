import Image from "next/image";
import React from "react";
import StickyHeader from '@/components/StickyHeader'

type BoxProps = {
  children?: React.ReactNode;
  className?: string;
};

function Box({ children, className = "" }: BoxProps) {
  return (
    <div className={`w-[672px] h-screen bg-gray-200 border border-gray-400 rounded-md p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
    <StickyHeader />
    <div className="max-w-7xl mx-auto px-4"> 
        <div className="mt-[-10px] font-sans grid grid-rows-[1fr_20px] p-8 pb-20 gap-16 sm:p-20 h-screen w-full">
        <main className="col-span-full flex flex-col gap-[32px] h-full">
            <Box className="h-full w-full">
                <p>this is a box!</p>
            </Box>
            {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
                />
                Deploy now
            </a>
            <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Read our docs
            </a>
            </div> */}
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
    </div>
    </>
  );
}
