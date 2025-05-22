import { NextResponse } from "next/server";

// Optional: verify secret if Zenbooker sends one
const WEBHOOK_SECRET = process.env.ZENBOOKER_WEBHOOK_SECRET;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Optional: verify the request using header
    const signature = req.headers.get("x-zenbooker-signature");
    if (WEBHOOK_SECRET && signature !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Example: Booking created payload
    const { booking_id, customer, service, time, notes } = body;

    // TODO: Store to DB, trigger notifications, etc.
    console.log("Zenbooker booking received:", {
      booking_id,
      customer,
      service,
      time,
    });

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
