import { NextRequest, NextResponse } from 'next/server'
import { getToolById } from '@/lib/supabaseQueries'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id

  try {
    const tool = await getToolById(id)
    if (tool) {
      return NextResponse.json(tool)
    } else {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('Error fetching tool:', error)
    return NextResponse.json({ error: 'Failed to fetch tool' }, { status: 500 })
  }
}