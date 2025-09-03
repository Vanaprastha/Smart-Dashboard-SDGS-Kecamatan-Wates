import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Smart Dashboard SDGs Wates",
  description: "Monitoring SDGs, prediksi, clustering, dan chatbot.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-dashboard relative text-neutral-100">
        <div className="max-w-[1440px] mx-auto p-4">
          <div className="flex gap-4 h-screen">
            <Sidebar />
            <main className="flex-1 glass-1 h-screen overflow-y-auto p-4 rounded-2xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
