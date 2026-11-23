import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetStartedProvider from "@/components/GetStartedModel";

export const metadata = {
  title: "Noble Infotech | Web Development Company in Tenkasi",
  description:
    "Noble Infotech builds fast websites, SEO and digital marketing for businesses in Chennai. Contact us for your project.",
  keywords: [
    "Noble Infotech",
    "software company Tenkasi",
    "website development Alangulam",
    "digital marketing Tenkasi",
    "Meta Ads",
    "SEO",
    "reels creative design",
  ],
  icons: { icon: "/favicon.png" },
};

export const viewport = {
  themeColor: "#060816",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
        />
      </head>
      <body>
        <GetStartedProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </GetStartedProvider>
      </body>
    </html>
  );
}