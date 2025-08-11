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

export default function Repos() {
    return (
        <>
        <StickyHeader />
        </>
    )
}