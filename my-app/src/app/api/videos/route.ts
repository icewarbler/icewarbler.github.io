import { NextResponse } from 'next/server'

type Video = {
  id: string
  title: string
  description: string
  thumbnailUrl: string
}

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId='UCUkwZZLEWEqsNKCZ9E8TAxQ';

    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=10&type=video`);
    if (!res.ok) {
      return NextResponse.json({ error: 'Youtube API error' }, { status: res.status })
    }
    const data = await res.json()

    // Formats video data
    const videos: Video[] = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.medium.url,
    }))

    return NextResponse.json(videos)
  } catch {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 })
  }
}