import { createFileRoute } from "@tanstack/react-router";
import { Reader } from "@/components/vinekeeper/reader";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Reader />;
}
