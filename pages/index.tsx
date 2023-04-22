import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>
        Welcome to my blog
      </h1>

      <p>This is the 1st version of the front for my blog. Please, be aware it is a basic Next App implemented</p>
    </main>
  )
}
