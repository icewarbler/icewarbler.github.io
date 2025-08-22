"use client";

import Image from 'next/image';
import StickyHeader from "@/components/StickyHeader"
import { useEffect, useState } from "react"

type Video = {
  id: string
  title: string
  description: string
  thumbnailUrl: string
}

interface YoutubeItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: { url: string };
    };
  };
}

function VideoList() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const apiKey = process.env.YOUTUBE_API_KEY;
        const channelId='UCUkwZZLEWEqsNKCZ9E8TAxQ';

        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=10&type=video`);
        if (!res.ok) throw new Error("Failed to fetch videos")
        const data: Video[] = await res.json()
      
        setVideos(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  return (
    <ul>
      <div>
        {loading && <p>Loading videos...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <ul>
          {videos.map((video) => (
            <li key={video.id}>{video.title}</li>
          ))}
        </ul>
      </div>
      {videos.map(video => (
        <li key={video.id}>
          <Image src={video.thumbnailUrl} alt={video.title} unoptimized/>
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
        <VideoList />
        <p>Soon to come...</p>
        </>
    )
}