import { projects as fallbackProjects } from "@/lib/data/projects";
import { getSupabaseClient } from "./db";

/**
 * Fetch projects from the Supabase "projects" table.
 * Falls back to static project data if Supabase credentials are not set,
 * or if query fails/table is empty.
 */
export async function getProjects() {
  "use cache";
  const supabase = getSupabaseClient();
  if (!supabase) {
    return fallbackProjects;
  }

  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      if (error) {
        console.warn("Supabase projects query warning:", error.message);
      }
      return fallbackProjects;
    }

    return data.map((item) => ({
      id: item.id || item.slug || String(item.title || "").toLowerCase().replace(/\s+/g, "-"),
      title: item.title,
      subtitle: item.subtitle || "",
      description: item.description || "",
      image: item.image || item.image_url || "/images/projects/zenith-commerce.svg",
      tags: Array.isArray(item.tags)
        ? item.tags
        : typeof item.tags === "string"
        ? item.tags.split(",").map((t) => t.trim()).filter(Boolean)
        : [],
      metrics: Array.isArray(item.metrics)
        ? item.metrics
        : typeof item.metrics === "string"
        ? item.metrics.split(",").map((m) => m.trim()).filter(Boolean)
        : [],
      githubUrl: item.github_url || item.githubUrl || "https://github.com",
      liveUrl: item.live_url || item.liveUrl || "#contact",
      featured: item.featured ?? false,
      year: item.year ? String(item.year) : new Date().getFullYear().toString(),
    }));
  } catch (err) {
    console.error("Failed to fetch projects from Supabase:", err);
    return fallbackProjects;
  }
}
