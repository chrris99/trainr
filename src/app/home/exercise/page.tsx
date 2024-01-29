import Link from "next/link";
import { ExerciseCard } from "./_components/exercise-card";
import { createSupabaseServerClient } from "@/supabase/server";

export default async function ExercisePage() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from("exercise").select();

  return (
    <div>
      <Link href="/home/exercise/create">Create exercise</Link>
      {data?.map((exercise) => <div key={exercise.id}>{exercise.name}</div>)}
    </div>
  );
}
