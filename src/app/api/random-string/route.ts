import { NextResponse } from "next/server";

export async function GET() {
  const randomString = Math.random().toString(36).substring(2, 12);
  return NextResponse.json({ randomString });
}
