import Image from "next/image";

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
    <div className="mt-[-10px] justify-center font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="col-span-full flex flex-col gap-[32px] items-start sm:items-start">
        <div className="grid grid-cols-[1fr_auto] items-center justify-center gap-20 items-start">
          <div className="flex flex-col gap-4 w-[800px] pr-[40px]">
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
        {/* <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol> */}

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
    </>
  );
}
