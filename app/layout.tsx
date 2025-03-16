import '@/app/ui/global.css';
import Footer from "@/app/ui/Footer/Footer";
import AppHeader from "@/app/ui/Header/AppHeader";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API;

async function getSiteData() {
  try {
    const res = await axios.get(`${API_URL}/global`);
    return res.data.data;
  } catch (error) {
    console.error("Failed to fetch global data:", error);
    return [];
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getSiteData();


  return (
    <html lang="en">
      <body className={`antialiased`}>
      {/*<CustomCursor/>*/}
        <AppHeader data={global}/>
        {children}
        <Footer data={global}/>
      </body>
    </html>
  );
}
