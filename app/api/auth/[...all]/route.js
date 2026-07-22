import { getAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const auth = getAuth();
  const handler = toNextJsHandler(auth);
  return handler.GET(request);
}

export async function POST(request) {
  const auth = getAuth();
  const handler = toNextJsHandler(auth);
  return handler.POST(request);
}