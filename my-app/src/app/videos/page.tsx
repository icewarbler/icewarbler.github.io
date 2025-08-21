"use client";


import StickyHeader from "@/components/StickyHeader"
import { useEffect, useState } from "react"

type Video = {
  id: string
  title: string
  description: string
  thumbnailUrl: string
}

function VideoList() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/videos")
        if (!res.ok) throw new Error("Failed to fetch repos")
        const data: Video[] = await res.json()
        setVideos(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <img src={video.thumbnailUrl} alt={video.title} />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
            Watch on YouTube
          </a>
        </li>
      ))}
    </ul>
  )
}


export default function videos() {
    return (
        <>
        <StickyHeader />
        <p>Soon to come...</p>
        </>
    )
}