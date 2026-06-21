import type { Metadata } from "next";
import { AppLayout } from "@/components/app-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhD Outreach Dashboard",
  description: "Track PhD applications, professor responses, and deadlines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
