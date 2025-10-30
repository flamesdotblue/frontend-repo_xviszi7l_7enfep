import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200 via-white to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid gap-10 py-20 md:grid-cols-2 md:gap-12 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Star className="h-3.5 w-3.5" />
              New: Beautiful starter built with React & Tailwind
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build stunning websites faster
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A modern, responsive starter that helps you launch ideas quickly. Designed for clarity, speed, and a delightful developer experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img alt="avatar" src="https://i.pravatar.cc/40?img=5" className="h-6 w-6 rounded-full ring-2 ring-white" />
                  <img alt="avatar" src="https://i.pravatar.cc/40?img=15" className="h-6 w-6 rounded-full ring-2 ring-white" />
                  <img alt="avatar" src="https://i.pravatar.cc/40?img=25" className="h-6 w-6 rounded-full ring-2 ring-white" />
                </div>
                <span>Trusted by creators</span>
              </div>
              <div>Ship in minutes, not weeks</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-indigo-200 blur-3xl opacity-50" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop"
                alt="Showcase"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-xl font-bold text-slate-900">+120%</div>
                  <div className="text-slate-600">Faster Launch</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-xl font-bold text-slate-900">24/7</div>
                  <div className="text-slate-600">Support</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="text-xl font-bold text-slate-900">A+</div>
                  <div className="text-slate-600">Accessibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
