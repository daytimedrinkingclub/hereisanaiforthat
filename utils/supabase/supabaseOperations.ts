import { createClient } from "./client";

export async function submitTool(toolData: {
  name: string;
  description: string;
  link: string;
  category: string;
}) {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('submitted_tools')
    .insert([toolData]);

  if (error) {
    throw error;
  }

  return data;
}