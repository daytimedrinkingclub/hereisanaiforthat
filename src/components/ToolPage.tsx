'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Tool } from '@/types/tool'
import Layout from "@/components/Layout"

export default function ToolPage() {
  const { id } = useParams()
  const [tool, setTool] = useState<Tool | null>(null)

  useEffect(() => {
    const fetchTool = async () => {
      const response = await fetch(`/api/tools/${id}`)
      const data = await response.json()
      setTool(data)
    }
    fetchTool()
  }, [id])

  if (!tool) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>
        <p className="mb-4">{tool.description}</p>
        {/* Add more details here based on your tool schema */}
      </main>
    </Layout>
  )
}