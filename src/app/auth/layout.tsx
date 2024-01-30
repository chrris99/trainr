import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trainr | Auth",
  description: "Authenticate to Trainr"
};

export default function AuthLayout({
  children,
  link
}: {
  children: React.ReactNode;
  link: React.ReactNode;
}) {
  return (
    <main className="h-full">
      <div className="container relative grid h-full flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        {link}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Trainr
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Join <strong className="font-semibold">Trainr</strong>{" "}
                now and experience the difference of a personalized fitness
                journey. Say goodbye to generic workouts and hello to a fitness
                plan as unique as you are!&rdquo;
              </p>
              <footer className="text-sm">
                Sofia Davis - Personal Trainer
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">{children}</div>
      </div>
    </main>
  );
}
