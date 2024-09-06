import { NextResponse } from 'next/server'

export function handleApiError(error) {
  console.error('API Error:', error)

  if (error.code === 'PGRST116') {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 })
  }

  return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
}