import Link from 'next/link';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-centerS">
      {children}
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
}