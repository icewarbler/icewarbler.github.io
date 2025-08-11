import React from 'react'

export default function Banner() {
  return (
    <div
      className="bg-center bg-cover text-white h-[500px] text-center py-10"
      style={{ backgroundImage: "url('/lake_banner.jpg')" }}
    >
      <p className="text-lg font-semibold">
        Welcome to my website!
      </p>
    </div>
  )
}