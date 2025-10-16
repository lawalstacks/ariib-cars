import { Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "Ariib Autos",
  description: "Drive with trust",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header/>
        <main className='min-h-screen'>
            {children}
        </main>

        <Toaster richColors/>
      <footer className='bg-amber-50 py-12'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          <p>powered <span className='font-bold'>by Miiglu Studio</span></p>
        </div>
      </footer>
      </body>
    </html>
    </ClerkProvider>
   
  );
}
