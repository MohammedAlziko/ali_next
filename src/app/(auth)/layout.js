import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css"
import "./auth.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body
         style={{
          height: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          alignItems: "center"
        }}
        className="text-center text-bg-dark auth "
      >
        <Header/>
     
   {children}
   
     
        <Footer/>
        </body>
    </html>
  )
}
