import '@/app/ui/global.css';
import Footer from "@/app/ui/Footer/Footer";
import AppHeader from "@/app/ui/Header/AppHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AppHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
