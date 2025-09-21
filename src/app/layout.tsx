import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Lash Luxe",
  description: "Discover our exquisite collection of false eyelashes, designed to enhance your natural beauty and create captivating looks for every occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          src="https://cdn.shopify.com/shopifycloud/consent-tracking-api/v0.1/consent-tracking-api.js"
          async
        />
      </head>
      <body className="bg-background-light font-display text-neutral-800">
        <CartProvider>
          <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header />
            {children}
            <Footer />
            <CookieBanner />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
