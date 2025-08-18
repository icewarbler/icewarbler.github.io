import React from 'react'
import Image from "next/image";
import Link from 'next/link'

type BoxProps = {
  children?: React.ReactNode;
  className?: string;
};

function Box({ children, className = "" }: BoxProps) {
  return (
    <div className={`w-[700px] h-[200px] bg-gray-200/50 border border-gray-400 rounded-md p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <svg
      className="arrow-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="arrow-path" d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Banner() {
  return (
     <div className="bg-white bg-center bg-cover text-black h-[500px] py-10">
            <Box className="flex flex-row h-full  mx-auto px-4 w-[1000px]">
                <div className="flex flex-row justify-center items-start w-full">
                    <div className="flex flex-col gap-4 w-[800px] pr-[40px] items-start text-start">
                        <h1 className="text-4xl font-bold">Videos</h1>
                        <p className="text-base leading-relaxed">
                        My father's youtube videos -- mostly ghost-hunting and cemetery exploration.
                        </p>
                        <Link href="/videos" className="flex col-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Go to Videos 
                            <Arrow />
                        </Link>
                    </div>
                    <figure className="flex h-auto flex flex-col">
                        <Image
                            className="flex mr-[80px] w-80 h-auto"
                            src="/youtube-logo.jpg"
                            alt="Beau"
                            width={150}
                            height={150}
                            priority
                        />
                        
                    </figure>
                </div>
            </Box>
    </div>
  )
}