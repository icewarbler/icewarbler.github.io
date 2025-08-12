import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const githubRes = await fetch('https://api.github.com/users/icewarbler/repos')
    if (!githubRes.ok) {
      return NextResponse.json({ error: 'GitHub API error' }, { status: githubRes.status })
    }
    const data = await githubRes.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 })
  }
}