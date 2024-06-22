import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiny Away Home",
  description: "Tiny Away Home Page",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
