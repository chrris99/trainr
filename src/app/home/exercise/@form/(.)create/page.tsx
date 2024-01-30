import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { ExerciseForm } from "../../_components/exercise-form";
import { Header } from "@/components/header";

export default function CreateExerciseForm() {
  return (
    <>
      <ResizableHandle withHandle />
      <ResizablePanel minSize={20} defaultSize={20} order={2}>
        <Header title="Create a new exercise" />
        <ExerciseForm />
      </ResizablePanel>
    </>
  );
}
