import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function ToolPage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: tool, error } = await supabase
    .from("tool")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !tool) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>
      <p className="text-lg mb-4">{tool.description}</p>
      <div className="mb-4">
        <span className="font-semibold">Category:</span> {tool.category}
      </div>
      <a
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Visit Website
      </a>
    </div>
  );
}