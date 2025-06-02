import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import { ThemeProvider } from '@/components/theme-provider'
import { GenresProvider } from '@/context/GenresContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies App',
  description: 'Movies App using TMDB API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GenresProvider>
            <Nav />
            {children}
          </GenresProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 