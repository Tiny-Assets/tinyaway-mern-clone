import '@fontsource-variable/source-sans-3';
import '@fontsource-variable/work-sans'; 
import '@fontsource/lato'; 
import '@/app/globals.css';
import type { Metadata } from "next"; 
import AnnouncementBar from './shared-components/AnnouncementBar';
import Navbar from './shared-components/NavBar';

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
        <AnnouncementBar />
        <Navbar />
        { children }
      </body>
    </html>
  );
}
