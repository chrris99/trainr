"use client";

import { Nav } from "@/components/nav/nav";
import { Archive, Dumbbell, LogOut, Send, Trophy, User } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/ui/resizable";
import { useState } from "react";
import { cn } from "@/utils";
import { SignOutButton } from "../auth/_components/sign-out-button";

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full items-stretch"
      >
        <ResizablePanel
          defaultSize={20}
          collapsedSize={3}
          collapsible={true}
          minSize={15}
          maxSize={25}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <Nav
            isCollapsed={isCollapsed}
            items={[
              {
                title: "Profile",
                href: "/home/profile",
                label: "2",
                icon: User,
                variant: "default"
              },
              {
                title: "Exercise",
                href: "/home/exercise",
                label: "9",
                icon: Dumbbell,
                variant: "ghost"
              },
              {
                title: "Workout",
                href: "/home/workout",
                label: "",
                icon: Send,
                variant: "ghost"
              },
              {
                title: "Progress",
                href: "home/progress",
                label: "23",
                icon: Trophy,
                variant: "ghost"
              },
              {
                title: "Archive",
                href: "home/archive",
                label: "",
                icon: Archive,
                variant: "ghost"
              }
            ]}
            footer={{
              title: "Sign out",
              href: "/auth/signout",
              icon: LogOut,
              variant: "ghost"
            }}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80} minSize={30}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
