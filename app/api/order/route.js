export async function POST(request) {
  // Email notifications are not configured — orders go through WhatsApp only.
  return Response.json({ success: true });
}