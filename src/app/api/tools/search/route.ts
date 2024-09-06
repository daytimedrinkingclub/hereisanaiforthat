import { NextRequest, NextResponse } from 'next/server'
import { searchTools } from '@/lib/supabaseQueries'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') ?? undefined
  const category = searchParams.get('category') ?? undefined

  try {
    const tools = await searchTools(query, category)
    return NextResponse.json(tools)
  } catch (error) {
    console.error('Error searching tools:', error)
    return NextResponse.json({ error: 'Failed to search tools' }, { status: 500 })
  }
}