import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function ExercisePageLayout({
  form,
  children
}: {
  form: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full items-stretch"
    >
      <ResizablePanel minSize={15} className="p-4">
        {children}
      </ResizablePanel>
      {form}
    </ResizablePanelGroup>
  );
}
