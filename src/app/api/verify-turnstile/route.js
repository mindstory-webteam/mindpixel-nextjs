import { NextResponse } from "next/server";

/**
 * Server-side Turnstile Siteverify endpoint
 * Endpoint: POST /api/verify-turnstile
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { token, action } = body;

    const secret = process.env.TURNSTILE_SECRET || process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

    if (!secret) {
      console.warn("TURNSTILE_SECRET is not set in env. Verification bypassed.");
      return NextResponse.json({ success: true, verified: false, note: "TURNSTILE_SECRET missing" });
    }

    if (!token || typeof token !== "string" || token.length > 2048) {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 400 });
    }

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      signal: AbortSignal.timeout(10000),
      body: new URLSearchParams({
        secret: secret,
        response: token,
      }),
    });

    if (!response.ok) {
      throw new Error(`Siteverify API error: ${response.status}`);
    }

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Turnstile siteverify error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
