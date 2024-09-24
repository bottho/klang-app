import Link from "next/link";
import RandomStringFetcher from '../components/RandomStringFetcher';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Klang Test App
        </h1>
        <nav className="flex flex-col gap-4">
          <Link href="/pages/static" className="text-white-500 hover:underline">
            Static Page
          </Link>
          <Link href="/pages/ssr" className="text-white-500 hover:underline">
            Server-Side Rendered Page
          </Link>
          <Link href="/pages/isr" className="text-white-500 hover:underline">
            Incremental Static Regeneration Page
          </Link>
          {/* Random String Fetcher */}
          <RandomStringFetcher />
        </nav>
      </main>
    </div>
  );
}
