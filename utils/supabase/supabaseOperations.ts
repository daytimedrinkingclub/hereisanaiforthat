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

export async function submitReview(reviewData: {
  toolId: number;
  rating: number;
  comment: string;
  userEmail: string;
}) {
  console.log(reviewData)
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // Redirect to sign-up page if user is not logged in
    window.location.href = "/sign-up";
    return;
  }

  const response = await fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit review");
  }

  return response.json();
}

export async function getReviewsForTool(toolId: number) {
  const supabase = createClient();

  const { data: reviews, error: reviewsError } = await supabase
    .from("reviews")
    .select('*')
    .eq("tool_id", toolId)
    .order("created_at", { ascending: false });

  if (reviewsError) {
    console.error("Error fetching reviews:", reviewsError);
    return [];
  }

  return reviews;
}
