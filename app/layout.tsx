import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: 'Yesse | Full-Stack Developer & Next.js Specialist | Dar es Salaam',
  description: 'Experienced full-stack developer specializing in Next.js, React, TypeScript, Tailwind CSS. Building fast, modern web applications and freelance projects in Tanzania and remotely. Available for hire.',
  keywords: [
    'web developer Dar es Salaam',
    'Next.js developer Tanzania',
    'React developer freelance',
    'full stack developer East Africa',
    'TypeScript developer',
    'frontend developer Tanzania',
    'hire web developer',
  ].join(', '),
  // Very important for portfolios
  openGraph: {
    title: 'Yessemasawe Full-Stack & Next.js Developer | Dar es Salaam',
    description: 'Creating performant web experiences with Next.js, React & modern tools. Freelance & remote projects welcome.',
    url: 'https://yessemasawe.site',             // use your real domain
    siteName: 'Yese Portfolio',
    images: [
      {
        url: '/your-photo.jpg',            // create a nice 1200×630 image
        width: 1200,
        height: 630,
        alt: 'YesseMasawe – Web Developer Portfolio',
      },
    ],
    locale: 'en_US',                      // or 'en' or 'sw_TZ' if you target Swahili too
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YesseMasawe | Next.js & React Developer',
    description: 'Freelance full-stack developer based in Dar es Salaam – open for projects.',
    images: ['/og-image.jpg'],
  },
  // Optional but helpful
  alternates: {
    canonical: 'https://yessemasawe.site',
  },
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
        {children}
      </body>
    </html>
  );
}
