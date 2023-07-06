"use client"

import "./styles/globals.scss";
import "./layout.scss"
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from 'react-redux';
import rootReducer from './redux'
import Header from "@/app/components/header"
import Sidebar from "@/app/components/sidebar"
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className} suppressHydrationWarning={true} >
        <Provider store={rootReducer}>
          <Header />
          <div className="content">
            <Sidebar />
            <main className="main">
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
