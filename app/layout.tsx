import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'somETHing v2',
  description: 'Ethereum education and content platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
