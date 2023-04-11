import { Nunito } from "next/font/google"
import { Navbar, Modal, ClientOnly } from "@components/index"

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
        {/* <ClientOnly> */}
        <Modal
          isOpen
          title="Modal Title"
          actionLabel="Label"
          // onClose={() => {}}
          // onSubmit={() => {}}
        />
        {/* </ClientOnly> */}
        <Navbar />

        {children}
      </body>
    </html>
  )
}
