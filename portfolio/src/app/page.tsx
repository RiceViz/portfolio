import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export default function Home() {
  return (
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="bold text-3xl">
          Title
        </div>
        <Terminal className="text-center">
          <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

          <AnimatedSpan delay={5500} className="text-green-500">
            <span>✔ Installing dependencies.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6000} className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>

          <TypingAnimation delay={6500} className="text-muted-foreground">
            Success! Project initialization completed.
          </TypingAnimation>
        </Terminal>
      </div>
  );
}
