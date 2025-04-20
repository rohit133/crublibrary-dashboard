import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner"
import { AuthProvider } from "@/contexts/AuthContext"
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'CRUD Library Platform',
  description: 'A lightweight API service for storing and retrieving data with a simple interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <GoogleOAuthProvider clientId={process.env.NEXT_GOOGLE_CLIENT_ID || ""}>
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
