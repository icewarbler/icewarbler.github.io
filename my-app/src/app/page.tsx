import Image from "next/image";

type BoxProps = {
  children?: React.ReactNode;
  className?: string;
};

function Box({ children, className = "" }: BoxProps) {
  return (
    <div className={`w-[700px] h-screen bg-gray-200 border border-gray-400 rounded-md p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

function StickyHeader() {
  return (
    <header className="sticky text-white top-0 bg-black p-4 shadow z-50  w-full flex items-baseline justify-between">
      <a href="/" className="text-xl font-bold">icewarbler.github.io</a>
      <nav className="flex space-x-6 justify-end">
        <a href="#box1" className="px-4 py-2 hover:rounded hover:bg-gray-100 transition">
          Repos
        </a>
        <a href="#box2" className="px-4 py-2 hover:rounded hover:bg-gray-100 transition">
          Videos
        </a>
        <a href="/contact" className="px-4 py-2 hover:rounded hover:bg-gray-100 transition">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <>
    <StickyHeader />
    <div className="max-w-9/10 mx-auto px-4"> 
        <div className="mt-[-10px] font-sans grid grid-rows-[1fr_20px] p-8 pb-20 gap-16 sm:p-20 h-screen w-full">
        <main className="col-span-full flex flex-col gap-[32px] h-full">
          <Box className="flex flex-row h-full w-full">
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
          <figure className="flex w-100 h-auto flex flex-col">
            <Image
              className="flex mr-[100px] w-100 h-auto"
              src="/beau_birthday_2022_border.png"
              alt="Beau"
              width={180}
              height={180}
              priority
            />
            <p className="ml-[180px]">
              <i>Me!</i>
            </p>
          </figure>
          </div>
          </Box>
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
