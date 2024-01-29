import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";

export default function CreateExerciseForm() {
  return (
    <>
      <ResizableHandle withHandle />
      <ResizablePanel
        minSize={20}
        defaultSize={20}
        className="transition-all duration-200 ease-in-out"
      >
        <div className="bg-blue-500">Create exercise form intercepted</div>
      </ResizablePanel>
    </>
  );
}
