import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const parsed = schema.safeParse(body);
          if (!parsed.success) {
            return new Response(JSON.stringify({ error: "invalid" }), { status: 400 });
          }
          // No email backend wired yet — log on server.
          console.log("[contact]", parsed.data);
          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch {
          return new Response(JSON.stringify({ error: "bad_request" }), { status: 400 });
        }
      },
    },
  },
});
