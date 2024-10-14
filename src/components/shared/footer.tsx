import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto h-10  bg-[#422006] text-sm w-full">
      <section className="flex flex-wrap p-2 justify-center gap-4 sm:gap-12 text-white">
        <div>Copyright © 2024 All rights Reserved</div>
        <Link href="/service">Terms of service</Link>
        <Link href="/privacy">Privacy policy</Link>
      </section>
    </footer>
  )
}
