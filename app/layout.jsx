import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components Imports
import Header from "@/components/Header";
import PageTransitionEvent from '@/components/PageTransition'

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
  variabler:"--font-JetBrainsMono"
});

export const metadata = {
  title: "Minhajul islam Ruhan",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variabler}>
        <Header />
        <PageTransitionEvent>
          {children}
          </PageTransitionEvent>
      </body>
    </html>
  );
}
