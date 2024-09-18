import { Suspense } from 'react';
import { createClient } from "@/utils/supabase/server";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";
import Link from 'next/link';

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
      <div className="flex justify-between items-center mb-6 relative">
        <div className="absolute left-0">
          {/* This is an empty div to balance the layout */}
        </div>
        <h1 className="text-3xl font-bold mx-auto">AI Tools Directory</h1>
        <Link 
          href="/submit-tool" 
          className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300"
        >
          Submit Tool
        </Link>
      </div>
      <div className="mb-6">
        <SearchBar initialSearch={searchParams.search} />
      </div>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </Suspense>
      
    </div>
  );
}