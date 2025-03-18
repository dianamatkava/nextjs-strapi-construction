import "@/app/ui/global.css";
import Footer from "@/app/ui/Footer/Footer";
import AppHeader from "@/app/ui/Header/AppHeader";
import { global } from "@/app/data/globals";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/*<CustomCursor/>*/}
        <AppHeader
          siteDescription={global.siteDescription}
          siteSlogan={global.siteSlogan}
          siteReview={global.siteReview}
        />
        {children}
        <Footer siteDescription={global.siteDescription} />
      </body>
    </html>
  );
}
