import { createClient } from "@/utils/supabase/server";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";

export default async function ToolsDirectory({
  searchParams,
}: {
  searchParams: { search: string | undefined };
}) {
  const supabase = createClient();
  
  // Fetch all tools
  let query = supabase.from("tool").select("*");

  // Apply search filter if provided
  if (searchParams.search) {
    query = query.or(`name.ilike.%${searchParams.search}%,category.ilike.%${searchParams.search}%`);
  }

  const { data: tools, error } = await query;

  if (error) {
    console.error("Error fetching tools:", error);
    return <div>Error loading tools</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">AI Tools Directory</h1>
      <div className="mb-6">
        <SearchBar initialSearch={searchParams.search} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}