import "./globals.css";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import Checkout from "../components/Checkout";

export const metadata = {
  title: "FIROZA — Premium Pakistani Women's Fashion",
  description:
    "FIROZA celebrates the elegance, confidence, and individuality of modern women through exceptional craftsmanship and timeless eastern wear.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-ivory text-ink">
        <CartProvider>
          {children}
          <CartDrawer />
          <Checkout />
        </CartProvider>
      </body>
    </html>
  );
}