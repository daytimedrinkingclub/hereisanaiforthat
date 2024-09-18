import { createClient } from "./client";

export async function submitTool(toolData: {
  name: string;
  description: string;
  link: string;
  category: string;
}) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("submitted_tools")
    .insert([toolData]);

  if (error) {
    throw error;
  }

  return data;
}

export async function fetchTools(searchQuery?: string) {
  const supabase = createClient();

  let query = supabase.from("tool").select("*");

  if (searchQuery) {
    query = query.or(
      `name.ilike.%${searchQuery}%,category.ilike.%${searchQuery}`
    );
  }

  const { data, error } = await query;

  if (error) {
    console.log("Error fetching tools", error);
    throw error;
  }

  return data;
}
