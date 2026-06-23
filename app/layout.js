import "./globals.css";

export const metadata = {
  title: "FIROZA | Eastern Fashion",
  description: "Premium eastern wear for the modern woman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
