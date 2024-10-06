import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

// components
import { Navbar } from "@/components/organisms";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Front End Test",
    description: "30 Sept Front End Test",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="pt-[4.75rem] lg:pt-[6.25rem]">
                    <div className="fixed -top-80 left-1/2 z-30 -translate-x-1/2">
                        <div className="h-80 w-80 rounded-full bg-violet-800 blur-[220px]" />
                    </div>
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
