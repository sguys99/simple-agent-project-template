import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <div className="space-y-4">
        <span className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
          Next.js 15 · TailwindCSS v4 · shadcn/ui
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simple Next.js Fullstack Template
        </h1>
        <p className="text-muted-foreground mx-auto max-w-xl text-base">
          단일 Next.js 앱으로 빠르게 프론트엔드와 API를 함께 개발할 수 있는 스타터
          템플릿입니다. Vercel AI SDK, Vitest, 그리고 shadcn/ui가 미리 설정되어 있습니다.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <a href="/api/health">
            <Rocket className="mr-2 h-4 w-4" />
            Health Check
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Next.js Docs
          </a>
        </Button>
      </div>
    </main>
  );
}
