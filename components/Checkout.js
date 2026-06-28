"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { formatPKR, WHATSAPP_NUMBER } from "../lib/data";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const {
    checkoutOpen,
    setCheckoutOpen,
    cartItems,
    subtotal,
    orderPlaced,
    setOrderPlaced,
    clearCart,
  } = useCart();

  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "" });
  const [submitting, setSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);

  if (!checkoutOpen) return null;

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function buildWhatsAppMessage() {
    const lines = [
      "New Order — FIROZA",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Address: ${form.address}, ${form.city}`,
      "",
      "Items:",
      ...cartItems.map((i) => `- ${i.name} x${i.qty} — ${formatPKR(i.price * i.qty)}`),
      "",
      `Total: ${formatPKR(subtotal)}`,
      "Payment: Cash on Delivery",
    ];
    return lines.join("\n");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: cartItems.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
          subtotal,
        }),
      });
      setEmailStatus(res.ok ? "sent" : "failed");
    } catch (err) {
      setEmailStatus("failed");
    }

    const message = encodeURIComponent(buildWhatsAppMessage());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");

    setSubmitting(false);
    setOrderPlaced(true);
  }

  function handleClose() {
    setCheckoutOpen(false);
    if (orderPlaced) {
      setOrderPlaced(false);
      setEmailStatus(null);
      clearCart();
      setForm({ name: "", phone: "", email: "", address: "", city: "" });
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink/50" onClick={handleClose} />
      <div className="relative bg-ivory w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
        {!orderPlaced ? (
          <>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-2xl">Checkout</h3>
              <button onClick={handleClose} aria-label="Close checkout">
                <X size={20} />
              </button>
            </div>

            <div className="mb-5 max-h-40 overflow-y-auto space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x{item.qty}</span>
                  <span>{formatPKR(item.price * item.qty)}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block mb-1 text-ink/70">Full name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full border border-beige px-3 py-2 bg-white outline-none focus:border-firoza-deep"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-1 text-ink/70">Phone number</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full border border-beige px-3 py-2 bg-white outline-none focus:border-firoza-deep"
                  placeholder="03XX-XXXXXXX"
                />
              </div>
              <div>
                <label className="block mb-1 text-ink/70">Email address</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full border border-beige px-3 py-2 bg-white outline-none focus:border-firoza-deep"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-1 text-ink/70">Delivery address</label>
                <input
                  required
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  className="w-full border border-beige px-3 py-2 bg-white outline-none focus:border-firoza-deep"
                  placeholder="House, street, area"
                />
              </div>
              <div>
                <label className="block mb-1 text-ink/70">City</label>
                <input
                  required
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="w-full border border-beige px-3 py-2 bg-white outline-none focus:border-firoza-deep"
                  placeholder="Lahore, Karachi, ..."
                />
              </div>

              <div className="flex justify-between font-medium pt-3 border-t border-beige">
                <span>Total</span>
                <span>{formatPKR(subtotal)}</span>
              </div>
              <p className="text-xs text-ink/60">Payment method: Cash on Delivery</p>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 text-xs uppercase tracking-widest text-white bg-champagne hover:bg-firoza-deep transition-colors mt-2 disabled:opacity-60"
              >
                {submitting ? "Placing Order..." : "Place Order"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-firoza-deep">
              <Check size={24} color="white" />
            </div>
            <h3 className="font-display text-2xl mb-2">Order Placed</h3>
            <p className="text-sm text-ink/70 mb-2">
              {emailStatus === "sent"
                ? "Our team has been notified by email and will reach out shortly to confirm."
                : "We've also opened WhatsApp with your order details — please send that message to confirm."}
            </p>
            <p className="text-sm text-ink/70 mb-6">
              Payment: Cash on Delivery.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 text-xs uppercase tracking-widest text-white bg-firoza-deep"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}