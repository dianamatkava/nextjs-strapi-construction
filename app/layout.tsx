import '@/app/ui/global.css';
import Footer from "@/app/ui/Footer/Footer";
import AppHeader from "@/app/ui/Header/AppHeader";
import CustomCursor from "@/app/ui/CustomCursor";
import AnimatedCursor from "react-animated-cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '2px solid var(--cursor-color)'
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
      />
        <AppHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
