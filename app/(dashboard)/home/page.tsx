import { Suspense } from "react";
import { createClient } from "@/utils/supabase/server";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import GradualSpacing from "@/components/magicui/gradual-spacing";

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
    query = query.or(
      `name.ilike.%${searchParams.search}%,category.ilike.%${searchParams.search}%`
    );
  }

  const { data: tools, error } = await query;

  if (error) {
    console.error("Error fetching tools:", error);
    return <div>Error loading tools</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="flex flex-col items-center mb-2 mt-5 relative">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-gray-300 dark:text-white md:text-7xl md:leading-[5rem]"
          text=" AI Tools Directory"
        />
        <div className="flex justify-end w-full">
          <Link href="/submit-tool" className="">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-200">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-800 px-5 py-2 text-md font-bold text-white backdrop-blur-3xl">
                Submit Tool
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="mb-52">
        <SearchBar initialSearch={searchParams.search}/>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
