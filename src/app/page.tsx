'use client'

import Banner from '@/features/home/Banner'
import Introduction from '@/features/home/Introduction'
import Product from '@/features/home/Product'

export default function HomePage() {

  return (
    <>
      <main>
        <Banner />
        <Introduction />
        <Product />
      </main>
    </>
  )
}
