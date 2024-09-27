import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: 'Webshop',
  description: 'A new webshop made in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </div>  
      </body>
    </html>
  )
}
