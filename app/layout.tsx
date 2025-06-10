import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KLPBBS QQ GROUP',
  description: 'KLPBBS Oficial QQ Group Page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
