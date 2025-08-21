import React from 'react'

export default function StickyHeader() {
  return (
    <header className="sticky text-white top-0 bg-black p-4 shadow z-50  w-full flex items-baseline justify-between">
      <a href="/" className="text-xl font-bold">icewarbler.github.io</a>
      <nav className="flex space-x-6 justify-end">
        <a href="/repos" className="px-4 py-2 hover:rounded hover:bg-gray-100 transition">
          Repos
        </a>
        <a href="/videos" className="px-4 py-2 hover:rounded hover:bg-gray-100 transition">
          Videos
        </a>
      </nav>
    </header>
  );
}