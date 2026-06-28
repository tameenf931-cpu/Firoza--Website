import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, city, items, subtotal } = body;

    if (!name || !phone || !address) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const itemsList = (items || [])
      .map((i) => `${i.name} x${i.qty} — Rs. ${(i.price * i.qty).toLocaleString("en-PK")}`)
      .join("\n");

    const notifyEmail = process.env.STORE_NOTIFY_EMAIL;
    if (!notifyEmail || !process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email notifications are not configured yet" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "FIROZA Orders <onboarding@resend.dev>",
      to: notifyEmail,
      reply_to: email || undefined,
      subject: `New Order — ${name} (Rs. ${Number(subtotal).toLocaleString("en-PK")})`,
      text: [
        "New Order — FIROZA",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `Address: ${address}, ${city}`,
        "",
        "Items:",
        itemsList,
        "",
        `Total: Rs. ${Number(subtotal).toLocaleString("en-PK")}`,
        "Payment: Cash on Delivery",
      ].join("\n"),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Order email failed:", err);
    return Response.json({ error: "Failed to send notification email" }, { status: 500 });
  }
}