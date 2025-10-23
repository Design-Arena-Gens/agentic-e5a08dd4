import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MEXT Research Proposal Generator',
  description: 'Comprehensive research proposal tool for MEXT scholarship exam',
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
