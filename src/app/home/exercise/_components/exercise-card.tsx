"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tables } from "@/database.types";
import { deleteExercise } from "../_actions/delete-exercise";
import Link from "next/link";

type ExerciseCardProps = { exercise: Tables<"exercise"> };
const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link href={`/home/exercise/${exercise.id}`}>
      <Card>
        <CardHeader className="flex flex-row justify-between align-center">
          <div>
            <CardTitle>{exercise.name}</CardTitle>
            <CardDescription>{exercise.description}</CardDescription>
          </div>
          <Button variant="destructive">Delete</Button>
        </CardHeader>

        <CardContent>{exercise.description}</CardContent>
        <CardFooter className="flex justify-end">
          <Button
            variant="destructive"
            onClick={async () => deleteExercise(exercise.id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export { ExerciseCard };
