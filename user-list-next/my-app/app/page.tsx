import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
          Welcome
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Manage your users with ease
        </h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          A simple place to view and keep track of your growing user list.
        </p>

        <div className="mt-8">
          <Link
            href="/users"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            View Users
          </Link>
        </div>
      </div>
    </main>
  );
}