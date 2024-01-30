import Link from "next/link";
import { ExerciseCard } from "./_components/exercise-card";
import { createSupabaseServerClient } from "@/supabase/server";
import { Button } from "@/components/ui/button";

export default async function ExercisePage() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from("exercise").select();

  return (
    <div className="flex-1 p-8 pt-6 @container">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Exercises</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Link href="/home/exercise/create">Create exercise</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-5 grid-cols-1 @lg:grid-cols-2 @7xl:grid-cols-4">
        {data?.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
