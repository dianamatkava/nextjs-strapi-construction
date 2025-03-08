import '@/app/ui/global.css';
import Footer from "@/app/ui/Footer/Footer";
import AppHeader from "@/app/ui/Header/AppHeader";
import CustomCursor from "@/app/ui/CustomCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
      {/*<CustomCursor/>*/}
        <AppHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
