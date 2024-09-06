'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from "next/link"
import { Tool } from '@/types/tool'
import Layout from "@/components/Layout"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="container px-4 py-12 mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <img
                // src={tool.image_url || "/placeholder.svg"}
                width={400}
                height={400}
                alt={`${tool.name} Logo`}
                className="w-full max-w-[300px] rounded-lg"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold">{tool.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`w-5 h-5 ${i < Math.round(3.5) ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`} />
                    ))}
                  </div>
                  // Hardcoded rating data for now
                  <span className="text-muted-foreground">3.5 ( 35 reviews)</span>
                </div>
              </div>
              <div className="prose text-muted-foreground">
                <p>{tool.description}</p>
              </div>
              <Link
                href={"https://daytimedrinking.club/"}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Product
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
            <div className="space-y-8">
              {/* Hardcoded reviews data for now */}
              {[
                { user_name: 'John Doe', rating: 4, comment: 'Great tool!' },
                { user_name: 'Jane Smith', rating: 5, comment: 'Excellent!' },
                { user_name: 'Alice Johnson', rating: 3, comment: 'Good, but could be better.' }
              ].map((review, index) => (
                <div key={index} className="flex gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>{review.user_name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{review.user_name}</div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}