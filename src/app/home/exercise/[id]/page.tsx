import { createSupabaseServerClient } from "@/supabase/server";

export default async function ExerciseDetailPage({
  params
}: {
  params: { id: string };
}) {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("exercise")
    .select()
    .eq("id", params.id)
    .single();

  return (
    <div>
      <p>{data?.name}</p>
    </div>
  );
}
