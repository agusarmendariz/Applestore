import type { Metadata } from "next";
import { DM_Serif_Display,Roboto_Mono,Alegreya_Sans,Merriweather } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/appContext";
import { Toaster, toast } from 'sonner'

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
const alegreyaSans= Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400","500","700"],
});


const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400","700"],
});

export const metadata: Metadata = {
  title: "AppleStore",
  icons: {
    icon:"apple-icon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
     
    <html lang="en">
      <body
        className={`${dmSerif.variable}  ${robotoMono.variable} ${alegreyaSans.variable}  ${merriweather.variable} antialiased`}
      >
        <AppProvider>
        <Toaster richColors position="top-right"/>  
        <NavBar />
       <div className="min-h-screen flex flex-col">
            <main className="flex-1 pb-20 px-4">{children}</main>
          </div>
        <Footer />
        </AppProvider>
      </body>
    </html>
    
    
  );
}
