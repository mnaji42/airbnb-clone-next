import { Nunito } from "next/font/google"
import { Navbar } from "@components/index"
import { RegisterModal, LoginModal } from "@components/Modal"
import ToasterProvider from "./providers/ToasterProvider"

import "./globals.css"

export const metadata = {
  title: "Airbnb clone",
  description: "Fullstack airbnb clone with nextjs 13",
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
