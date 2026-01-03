import { NextResponse } from "next/server";

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !EMAIL_REGEX.test(email) || !message) {
    return NextResponse.json(
      {
        success: false,
        message: "Name, valid email, and message are required.",
      },
      { status: 400 },
    );
  }

  console.log("📬 API contact submission", {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: "Thanks for reaching out. We'll be in contact shortly.",
  });
}
