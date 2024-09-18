import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  title: "Here's an AI for That - AI Tools Directory",
  description: "Discover and explore the latest AI tools to enhance your productivity and creativity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-[#1a1b26] text-white">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1 pl-5 ">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-6 ml-[64px] md:ml-[10rem]">
              <div className="container mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}