import { Rocket, Shield, Zap, Layers } from 'lucide-react';

const features = [
  {
    title: 'Blazing Fast',
    description:
      'Optimized Vite + React setup with smart code-splitting and instant HMR for a silky-smooth dev experience.',
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Production Ready',
    description:
      'Solid defaults, accessibility-first design, and responsive layouts that look great on every screen.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Launch Quickly',
    description:
      'Pre-built sections and components help you deliver value faster with less boilerplate.',
    icon: Rocket,
    color: 'from-indigo-500 to-fuchsia-500',
  },
  {
    title: 'Composable',
    description:
      'Clean, reusable building blocks so you can scale your UI without the complexity.',
    icon: Layers,
    color: 'from-sky-500 to-cyan-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to move fast
          </h2>
          <p className="mt-3 text-slate-600">
            A carefully curated set of features that help you ship delightful products with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${f.color} opacity-20 blur-2xl`}
              />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white to-slate-50 ring-1 ring-inset ring-slate-200">
                  <f.icon className="h-5 w-5 text-slate-900" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
