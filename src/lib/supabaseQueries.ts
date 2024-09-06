// src/lib/supabaseQueries.ts
import { supabase } from './supabaseClient'
import { Tool } from '@/types/tool'

export async function getAllTools(): Promise<Tool[]> {
  const { data, error } = await supabase
    .from('ai_tools')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function getToolById(id: string): Promise<Tool | null> {
  const { data, error } = await supabase
    .from('ai_tools')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}

export async function searchTools(query?: string, category?: string): Promise<Tool[]> {
  let supabaseQuery = supabase.from('ai_tools').select('*')

  if (query) {
    supabaseQuery = supabaseQuery.or(`name.ilike.%${query}%,description.ilike.%${query}%`)
  }

  if (category) {
    supabaseQuery = supabaseQuery.eq('type', category)
  }

  const { data, error } = await supabaseQuery.order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}