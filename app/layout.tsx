import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThinkPhysically | 물리학적 사고',
  description: '일상을 물리학으로 해석하고, 비즈니스에 적용하는 사고법. Physical AI와 First Principles Thinking.',
  keywords: ['물리학', 'First Principles', '일론 머스크', 'Physical AI', '휴머노이드', '사고법'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-dark-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
