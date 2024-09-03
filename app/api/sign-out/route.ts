// app/api/sign-out/route.ts
import { NextResponse } from "next/server";
import { signOut } from "@/auth";

export async function POST() {
  await signOut();
  return NextResponse.redirect("/login");
}
