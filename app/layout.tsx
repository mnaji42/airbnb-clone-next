import { Nunito } from "next/font/google"

import getCurrentUser from "./actions/getCurrentUser"

import { Navbar } from "@components/index"
import { RegisterModal, LoginModal, RentModal } from "@components/Modal"
import ToasterProvider from "./providers/ToasterProvider"

import "./globals.css"

export const metadata = {
  title: "Airbnb clone",
  description: "Fullstack airbnb clone with nextjs 13",
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
