import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={dmSans.className}>
                <div className="flex flex-col max-w-7xl mx-auto bg-[#0F1117] min-h-screen">
                    <Hero />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
