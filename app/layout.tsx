import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'somETHing',
  description: 'Ethereum education and content platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
