import "./globals.css";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MeowlTube",
  description: "MeowlTube is blockchain media platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Header = dynamic(() => import("@/app/components/header"))
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
