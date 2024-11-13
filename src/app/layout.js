import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

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
          <main className="flex flex-col flex-grow md:mx-10 lg:mx-52">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
