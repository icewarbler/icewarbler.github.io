import React from 'react'
import Image from "next/image";

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

export default function Banner() {
  return (
    <div
      className="bg-center bg-cover text-black h-[500px] py-10"
      style={{ backgroundImage: "url('/lake_banner.jpg')" }}
    >
            <Box className="flex flex-row h-full  mx-auto px-4 w-[1000px]">
                <div className="flex flex-row justify-center items-start w-full">
                    <div className="flex flex-col gap-4 w-[800px] pr-[40px] items-start text-start">
                        <h1 className="text-4xl font-bold">Hi, I'm Beau!</h1>
                        <p className="text-base leading-relaxed">
                        ...and this is my website! I'm a recent graduate from UIUC, with a degree in engineering
                        physics and a minor in computer science. My favorite programming languages are python, C++,
                        and C, and I also love messing around with SQL queries. Beyond programming, I'm really into
                        all types of visual art: drawing, oil painting, digital -- pretty much everything! Thanks for vising,
                        and have a nice stay :)
                        </p>
                    </div>
                    <figure className="flex h-auto flex flex-col">
                        <Image
                            className="flex mr-[80px] w-80 h-auto"
                            src="/beau_birthday_2022_border.png"
                            alt="Beau"
                            width={150}
                            height={150}
                            priority
                        />
                        <p className="ml-[150px]">
                            <i>Me!</i>
                        </p>
                    </figure>
                </div>
            </Box>
    </div>
  )
}