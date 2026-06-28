"use client";

import { X, Plus, Minus } from "lucide-react";
import { formatPKR } from "../lib/data";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    itemCount,
    subtotal,
    changeQty,
    setCheckoutOpen,
  } = useCart();

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink/40" onClick={() => setCartOpen(false)} />
      <div className="relative w-full max-w-sm h-full bg-ivory flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-beige">
          <h3 className="font-display text-xl">Your Bag ({itemCount})</h3>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {cartItems.length === 0 ? (
            <p className="text-sm text-ink/60">Your bag is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img src={item.img} alt="" className="w-16 h-20 object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium leading-tight">{item.name}</p>
                  <p className="text-xs text-ink/60 mb-2">{formatPKR(item.price)}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center border border-beige"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm w-4 text-center">{item.qty}</span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center border border-beige"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-5 border-t border-beige">
            <div className="flex justify-between text-sm mb-4">
              <span>Subtotal</span>
              <span className="font-medium">{formatPKR(subtotal)}</span>
            </div>
            <button
              onClick={() => {
                setCartOpen(false);
                setCheckoutOpen(true);
              }}
              className="w-full py-3 text-xs uppercase tracking-widest text-white bg-firoza-deep hover:bg-ink transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}