import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Ivan blog',
  description: 'Nextjs',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  const header = (
    <div className='text-center my-10'>
      <Link href='/'>
        <h1 className='font-bold text-3xl'>Ivan&apos;s blog</h1>
      </Link>
      <p>Welcome to my blog</p>
    </div>
  )

  const footer = (
    <footer className='text-center text-gray-500 text-sm py-2'>
      <br />
      <div>Developed by Ivan</div>
    </footer>
  )


  return (
    <html lang="en">
      <body>
        <div className='mx-auto max-w-2xl px-2'>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
