import type { Metadata } from "next";
import '@/app/globals.scss'; 
import AnnouncementBanner from "./components/sharedComponents/AnnouncementBanner";
import Navbar from "./components/sharedComponents/Navbar/Navbar";
import FooterBox from "./components/sharedComponents/Footer/FooterBox";

interface RootLayoutProps {
  children: React.ReactNode; 
}

export const metadata: Metadata = {
  title: "Tiny Away Home",
  description: "Tiny Away Home Page",
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
    <html lang="en">
      <body>
        <AnnouncementBanner />
        <Navbar />
        {children}
        <FooterBox />
      </body>
    </html>
  );
}
