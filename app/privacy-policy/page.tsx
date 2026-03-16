import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Privacy Policy | FixItFirst',
  description: 'How FixItFirst collects, stores and uses your data. UK GDPR compliant.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-5 [&_h3]:mb-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: March 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        <Section title="Who we are">
          <p>FixItFirst (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at fixit-first.co.uk. We are committed to protecting your personal data and processing it in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          <p>Contact us: <a href="mailto:hello@fixit-first.co.uk" className="text-orange-500 hover:underline">hello@fixit-first.co.uk</a></p>
        </Section>

        <Section title="Data we collect">
          <h3>Account data</h3>
          <p>If you create an account we collect your email address and store it securely via Supabase (our authentication and database provider). We do not collect your name, phone number, or payment details.</p>
          <h3>Progress data</h3>
          <p>When you mark a guide as complete, we record which guide you completed and when. This is stored against your account in our Supabase database if you are signed in, or locally in your browser if you are not.</p>
          <h3>Usage data</h3>
          <p>We do not use analytics or tracking scripts. We do not collect your IP address, device fingerprint, or browsing history beyond what your browser sends to our hosting provider as standard web traffic.</p>
          <h3>Affiliate tracking</h3>
          <p>Some links on our guides point to third-party retailers through affiliate programmes. When you click these links the retailer may set a cookie on your device to attribute your visit. We do not control these cookies. See our <a href="/cookies" className="text-orange-500 hover:underline">Cookies page</a> for details.</p>
        </Section>

        <Section title="localStorage (browser storage)">
          <p>We use your browser&apos;s localStorage to save your progress, tool inventory, recently viewed guides, and UI preferences. This data never leaves your device unless you create an account, at which point it is optionally synced to our database.</p>
          <p>Keys we write to localStorage:</p>
          <ul>
            <li><code>fixitfirst-auth</code> — your Supabase session token</li>
            <li><code>fixitfirst-completed-guides</code> — list of guides you have marked complete</li>
            <li><code>fixitfirst-owned-tools</code> — your tool inventory</li>
            <li><code>fixitfirst-recently-viewed</code> — last 10 guides you visited</li>
            <li><code>fixitfirst-step-&#123;slug&#125;</code> — which step you are on in a guide</li>
            <li><code>fixitfirst-cookie-consent</code> — your cookie consent preference</li>
            <li><code>fixitfirst-storage-banner-dismissed</code> — whether you dismissed the storage notice</li>
            <li><code>fixitfirst-newsletter-popup-dismissed</code> — whether you dismissed the newsletter popup</li>
            <li><code>fixitfirst-onboarding-complete</code> — whether you completed onboarding</li>
          </ul>
          <p>You can clear all localStorage data at any time via your browser settings or our <a href="/cookies" className="text-orange-500 hover:underline">Cookies page</a>.</p>
        </Section>

        <Section title="How we use your data">
          <p>We use the data we hold to:</p>
          <ul>
            <li>Provide and personalise the FixItFirst service (saving your progress, showing your dashboard)</li>
            <li>Send you the newsletter if you opted in (you can unsubscribe at any time via the link in any email)</li>
            <li>Improve our guides and understand which content is most useful</li>
          </ul>
          <p>We do not sell, rent, or share your personal data with third parties for their marketing purposes.</p>
        </Section>

        <Section title="Supabase (our database provider)">
          <p>Our authentication and database is provided by Supabase, Inc. Your email address and completion records are stored on Supabase infrastructure hosted in the EU. Supabase is GDPR-compliant. You can read their privacy policy at <a href="https://supabase.com/privacy" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>.</p>
        </Section>

        <Section title="Affiliate programmes">
          <p>FixItFirst participates in affiliate programmes including Amazon Associates and the Awin network. When you click a product link and make a purchase, we may earn a small commission at no extra cost to you. Retailers may set attribution cookies when you click our links. We disclose all affiliate links on the relevant pages.</p>
        </Section>

        <Section title="Third-party links">
          <p>Our guides may contain links to external websites (e.g. retailers, manufacturer pages). Once you leave our site we have no control over those websites and are not responsible for their privacy practices. We recommend you read the privacy policy of any third-party site you visit.</p>
        </Section>

        <Section title="Your rights under UK GDPR">
          <p>If you have an account with us you have the following rights:</p>
          <ul>
            <li><strong>Right of access</strong> — request a copy of the data we hold about you</li>
            <li><strong>Right to rectification</strong> — ask us to correct inaccurate data</li>
            <li><strong>Right to erasure</strong> — ask us to delete your account and all associated data</li>
            <li><strong>Right to restriction</strong> — ask us to stop processing your data in certain ways</li>
            <li><strong>Right to data portability</strong> — receive your data in a machine-readable format</li>
            <li><strong>Right to object</strong> — object to processing based on our legitimate interests</li>
          </ul>
          <p>To exercise any of these rights email us at <a href="mailto:hello@fixit-first.co.uk" className="text-orange-500 hover:underline">hello@fixit-first.co.uk</a>. We will respond within 30 days.</p>
          <p>If you are unhappy with how we handle your data you have the right to complain to the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
        </Section>

        <Section title="Data retention">
          <p>We retain your account data for as long as your account is active. If you delete your account all personal data is removed within 30 days. Anonymised, aggregated data (e.g. total guide completion counts) may be retained indefinitely.</p>
        </Section>

        <Section title="Changes to this policy">
          <p>We may update this policy from time to time. We will update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of FixItFirst after a policy change constitutes acceptance of the updated policy.</p>
        </Section>

      </div>

      <MobileNav />
    </main>
  )
}
