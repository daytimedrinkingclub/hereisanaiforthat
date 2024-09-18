import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import ToolPageClient from './ToolPageClient';

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

  return <ToolPageClient tool={tool} />;
}