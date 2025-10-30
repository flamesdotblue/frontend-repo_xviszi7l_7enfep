import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function PricingCard({ tier, price, features, highlighted = false }) {
  return (
    <div
      className={`relative rounded-2xl border ${
        highlighted ? 'border-indigo-600' : 'border-zinc-200'
      } bg-white p-6 shadow-sm`}
    >
      {highlighted && (
        <span className="absolute -top-3 right-4 rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white shadow">
          Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-zinc-900">{tier}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight text-zinc-900">{price}</span>
        <span className="text-sm text-zinc-500">/mo</span>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li key={f} className="text-sm text-zinc-700">• {f}</li>
        ))}
      </ul>
      <a
        href="#cta"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm ${
          highlighted
            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
            : 'border border-zinc-200 text-zinc-900 hover:bg-zinc-50'
        }`}
      >
        Choose {tier}
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-b from-white to-zinc-50 border-t border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
              <p className="mt-3 text-zinc-600">Start free and scale as you grow. No hidden fees.</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PricingCard
                tier="Starter"
                price="$0"
                features={[
                  'All core components',
                  'Responsive layout',
                  'Basic support',
                ]}
              />
              <PricingCard
                tier="Pro"
                price="$12"
                highlighted
                features={[
                  'Everything in Starter',
                  'Advanced sections',
                  'Email support',
                ]}
              />
              <PricingCard
                tier="Business"
                price="$29"
                features={[
                  'Everything in Pro',
                  'Team permissions',
                  'Priority support',
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
