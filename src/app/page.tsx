'use client'

import { useEffect, useState } from 'react'
import { Tool } from '@/types/tool'
import AIToolCard from '@/components/Card'
import Layout from "@/components/Layout"
import { getAllTools } from '@/lib/supabaseQueries'
import Link from 'next/link'

export default function Home() {
  const [tools, setTools] = useState<Tool[]>([])

  useEffect(() => {
    const fetchTools = async () => {
      const fetchedTools = await getAllTools()
      setTools(fetchedTools)
    }
    fetchTools()
  }, [])

  return (
    <Layout>
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Here is an ai for that</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} href={`/tool/${tool.id}`}>
              <AIToolCard
                title={tool.name}
                description={tool.description}
                rating={3.5}
              />
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}