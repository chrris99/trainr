import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { ExerciseForm } from "../../_components/exercise-form";

export default function CreateExerciseForm() {
  return (
    <>
      <ResizableHandle withHandle />
      <ResizablePanel
        minSize={20}
        defaultSize={20}
        className="transition-all duration-200 ease-in-out"
      >
        <ExerciseForm />
      </ResizablePanel>
    </>
  );
}
