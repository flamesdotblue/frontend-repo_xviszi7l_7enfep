export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} VibeSite. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
