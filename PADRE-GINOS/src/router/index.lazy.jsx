import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute({
  path: "/",
  component: <div>Hello</div>,
});
