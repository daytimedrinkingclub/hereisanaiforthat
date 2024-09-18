import { createClient } from "@/utils/supabase/server";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";

export default async function Home() {
  const supabase = createClient();
  const { data: tools, error } = await supabase.from("tool").select("*");

  if (error) {
    console.error("Error fetching tools:", error);
    return <div>Error loading tools</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">HERE'S AN AI FOR THAT</h1>
      <SearchBar />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Just Launched</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}