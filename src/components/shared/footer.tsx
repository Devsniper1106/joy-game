import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="my-auto h-8 sm:h-10  bg-[#422006] text-[8px] sm:text-sm w-full">

    <section className="flex flex-wrap items-center py-2 justify-center gap-4 sm:gap-12 text-white">
     
        <div>Copyright © 2024 All rights Reserved</div>
        <Link href="/service">Terms of service</Link>
        <Link href="/privacy">Privacy policy</Link>

      </section>
    </footer>
  )
}
