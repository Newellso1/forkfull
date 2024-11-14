import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

export const metadata = {
  title: "Forkfull",
  description: "Recipe library built with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-full`}
      >
        <div className="flex flex-col overflow-x-clip">
          <Header />
          <main className="flex flex-col flex-grow md:mx-42 xl:mx-56 2xl:mx-72">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
