import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight:["400","600","700"],
  subsets: ["latin-ext"],
})

export const metadata = {
  title: {
    default: "Learning Next JS",
    template: "%s | Learning Next JS"
  },
  description: "Trying to learn Next JS as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar/>
        <main className="min-h-[calc(100vh-140px)]">
          {children}
        </main>

        {/* <Footer/> */}
      </body>
    </html>
  );
}
