"use client";

import Image from "next/image";
import React from "react";
import StickyHeader from '@/components/StickyHeader'
import { useEffect, useState } from "react"
import { NextResponse } from 'next/server'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
}
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

// function RepoList() {
//   const [repos, setRepos] = useState<Repo[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     async function fetchRepos() {
//       try {
//         const res = await fetch("/api/repos")
//         if (!res.ok) throw new Error("Failed to fetch repos")
//         const data: Repo[] = await res.json()
//         setRepos(data)
//       } catch (err: any) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchRepos()
//   }, [])

//   if (loading) return <p>Loading repos...</p>
//   if (error) return <p>Error: {error}</p>
//   if (repos.length === 0) return <p>No repos found</p>

//   return (
//     <ul>
//       {repos.map(repo => (
//         <li key={repo.id}>
//           <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//             {repo.name}
//           </a>
//           {repo.description && <p>{repo.description}</p>}
//         </li>
//       ))}
//     </ul>
//   )
// }

export default function Repos() {
    return (
        <>
        <StickyHeader />
        <RepoList />
        </>
    )
}