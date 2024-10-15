import type { Metadata } from "next";

import ChakraProvider from "@/providers/chakra";

import AppBar from "@/components/layout/app-bar";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "mHwn",
  description: "My Personal Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ChakraProvider>
          <AppBar />
          <Main>{children}</Main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
