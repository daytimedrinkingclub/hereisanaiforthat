import { createClient } from "@/utils/supabase/server";
import ToolCard from "@/components/tools/ToolCard"
import { toast } from "sonner";

export default async function ToolsDirectory() {
    const supabase = createClient();
    const {data: tools, error} = await supabase.from("tool").select("*");

    if (error) {
        console.error("Error fetching tools:", error)
        toast.error("Error fetching tools:")
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools?.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
            ))}
        </div>
    )
}