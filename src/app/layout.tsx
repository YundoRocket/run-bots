import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/Toaster";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Predictoor Bot Runner UI v1.4",
  description: "Configure & Run Predictoor / Trader bots - Complete workflow from setup to rewards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b relative">
            <div className="container mx-auto px-4 py-4">
              <Navigation />
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="px-4 border-t py-6 text-center text-sm text-muted-foreground">
            <p>Predictoor Bot Runner UI - Complete workflow guide from setup to rewards</p>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
