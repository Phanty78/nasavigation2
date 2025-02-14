import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import { ThemeProvider } from '@/utils/theme-provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nasavigation',
  description: "Discover NASA's most beautiful images",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
