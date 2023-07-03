import "./globals.scss";
import "./layout.scss";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
  const Header = dynamic(() => import("@/app/components/header"));
  const Sidebar = dynamic(() => import("@/app/components/sidebar"));
  return (
    <html>
      <body className={inter.className}>
        <Header />
        <main className="main">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
