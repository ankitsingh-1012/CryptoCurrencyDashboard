import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CryptoDashboard',
  description: 'Managed by Coin Market',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-400 text-slate-300 container m-1 p4`}>{children}</body>
    </html>
  )
}
