"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { submitTool } from '@/utils/supabase/supabaseOperations'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function SubmitToolPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    link: '',
    category: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {  
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await submitTool(formData)
      toast.success('Tool submitted successfully!')
      router.push('/')
    } catch (error) {
      console.error('Error submitting tool:', error)
      toast.error('Failed to submit tool. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#1e2330] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#252b3d] rounded-lg shadow-2xl p-8 w-full max-w-2xl text-white relative"
      >
        <Link href="/home" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ChevronLeftIcon size={24} />
            <span className="sr-only">Back to Home</span>
          </motion.button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center">
          Submit a New Tool
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Tool Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#1e2330] border border-gray-600 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50 transition duration-200 text-white"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <label htmlFor="description" className="block text-sm font-medium mb-1">Tool Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 rounded-md bg-[#1e2330] border border-gray-600 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50 transition duration-200 text-white"
            ></textarea>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <label htmlFor="link" className="block text-sm font-medium mb-1">Tool Link</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#1e2330] border border-gray-600 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50 transition duration-200 text-white"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <label htmlFor="category" className="block text-sm font-medium mb-1">Tool Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#1e2330] border border-gray-600 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50 transition duration-200 text-white"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4a546b" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#3a4257] text-white font-bold py-3 px-6 rounded-md text-lg shadow-lg transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Submitting...' : 'Submit Tool'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}