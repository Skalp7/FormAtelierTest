import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data?.email || !data?.message) {
    return NextResponse.json({ ok: false, error: "Missing contact details." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Message received. Connect this route to an email provider or CRM when ready."
  });
}
