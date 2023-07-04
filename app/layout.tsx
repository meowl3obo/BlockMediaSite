import "./styles/globals.scss";
import "./layout.scss";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux'
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });
const store = createStore(rootReducer);

export const metadata = {
  title: "MeowlTube",
  description: "MeowlTube is blockchain media platform",
  icons: {
    icon: '/favicon.ico'
  }
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
      <body className={inter.className} suppressHydrationWarning={true} >
        <Provider store={store}>
          <Header />
          <main className="main">
            <Sidebar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
