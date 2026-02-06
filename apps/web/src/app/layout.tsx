import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-background text-white antialiased'>
        {children}
      </body>
    </html>
  )
}
