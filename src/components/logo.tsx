import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "font-mono text-lg font-bold tracking-tight",
        dark ? "text-white" : "text-foreground",
        className
      )}
    >
      <span className={dark ? "text-lime" : "text-bold"}>{"<"}</span>
      CodeHeads
      <span className={dark ? "text-lime" : "text-bold"}>{"/>"}</span>
    </span>
  );
}
