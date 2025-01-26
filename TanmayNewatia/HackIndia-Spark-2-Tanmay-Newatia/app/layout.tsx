'use client'

import { Advent_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import { ThirdwebProvider } from "thirdweb/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from "react";
import Loading from "@/components/loading";

const queryClient = new QueryClient();
// const inter = Inter({ subsets: ["latin"] });
const advent = Advent_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={advent.className}>
        <ThirdwebProvider>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading />}>
              <Navbar />
              {children}
              {/* </AppContext> */}
            </Suspense>
          </QueryClientProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
