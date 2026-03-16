'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:font-semibold [&_strong]:text-gray-800 [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono">
        {children}
      </div>
    </section>
  )
}

export default function CookiesPage() {
  const [consent, setConsent] = useState<string | null>(null)
  const [cleared, setCleared] = useState(false)

  useEffect(() => {
    setConsent(localStorage.getItem('fixitfirst-cookie-consent'))
  }, [])

  const handleAccept = () => {
    localStorage.setItem('fixitfirst-cookie-consent', 'accepted')
    setConsent('accepted')
  }

  const handleClearAll = () => {
    const keysToKeep: string[] = []
    const keysToRemove = Object.keys(localStorage).filter(k => k.startsWith('fixitfirst-') && !keysToKeep.includes(k))
    keysToRemove.forEach(k => localStorage.removeItem(k))
    setConsent(null)
    setCleared(true)
  }

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Cookies &amp; Local Storage</h1>
          <p className="text-gray-400 text-sm">Last updated: March 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-900 leading-relaxed">FixItFirst uses your browser&apos;s localStorage to save your DIY progress. We do <strong>not</strong> use third-party advertising cookies. This page explains exactly what we store and why.</p>
        </div>

        <Section title="What is localStorage?">
          <p>localStorage is a feature built into every modern web browser that lets websites save small amounts of data on your device. Unlike cookies, localStorage data is never automatically sent to our servers — it stays on your device unless you clear it or create an account (in which case some data is optionally synced).</p>
        </Section>

        <Section title="What we store and why">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Key</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Purpose</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Required?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { key: 'fixitfirst-auth', purpose: 'Keeps you logged in between visits (Supabase session token)', required: 'Only if you sign in' },
                  { key: 'fixitfirst-completed-guides', purpose: 'Remembers which guides you have marked as complete', required: 'No — clears on browser data clear' },
                  { key: 'fixitfirst-owned-tools', purpose: 'Remembers which tools you own from your inventory', required: 'No' },
                  { key: 'fixitfirst-recently-viewed', purpose: 'Shows a list of the last 10 guides you visited', required: 'No' },
                  { key: 'fixitfirst-step-{slug}', purpose: 'Remembers which step you were on in a guide so you can pick up where you left off', required: 'No' },
                  { key: 'fixitfirst-cookie-consent', purpose: 'Saves your cookie consent preference so we do not ask again', required: 'Yes (functional)' },
                  { key: 'fixitfirst-storage-banner-dismissed', purpose: 'Remembers whether you dismissed the storage notice banner', required: 'No' },
                  { key: 'fixitfirst-newsletter-popup-dismissed', purpose: 'Prevents the newsletter popup from appearing again after you dismiss it', required: 'No' },
                  { key: 'fixitfirst-onboarding-complete', purpose: 'Remembers whether you have been through the first-time onboarding flow', required: 'No' },
                  { key: 'fixitfirst-confidence-{slug}', purpose: 'Saves your self-rated confidence level for a guide', required: 'No' },
                ].map(row => (
                  <tr key={row.key} className="border-b border-gray-100">
                    <td className="p-3 border border-gray-200 align-top"><code>{row.key}</code></td>
                    <td className="p-3 border border-gray-200 align-top text-gray-600">{row.purpose}</td>
                    <td className="p-3 border border-gray-200 align-top text-gray-600">{row.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Third-party cookies">
          <p>We do <strong>not</strong> use any third-party advertising, analytics, or social media cookies on FixItFirst.</p>
          <p>However, some guide pages contain links to retailers (such as Amazon, Screwfix, and B&amp;Q) through affiliate programmes. If you click one of these links and visit the retailer&apos;s website, that retailer may set their own cookies on your device in accordance with their own cookie policy. We do not control these cookies.</p>
          <p>Retailers we may link to and their cookie policies:</p>
          <ul>
            <li><a href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201890250" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">Amazon UK — Cookie notice</a></li>
            <li><a href="https://www.screwfix.com/help/privacypolicy/" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">Screwfix — Privacy policy</a></li>
            <li><a href="https://www.diy.com/content/privacy-policy" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">B&amp;Q — Privacy policy</a></li>
            <li><a href="https://www.toolstation.com/privacy-policy" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">Toolstation — Privacy policy</a></li>
          </ul>
        </Section>

        <Section title="How to clear your data">
          <p>You can clear all FixItFirst localStorage data using the button below. Note that this will remove your saved progress, tool inventory, and preferences. If you have an account your Supabase data will not be affected — only the local browser storage is cleared.</p>

          {cleared ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
              <p className="text-green-800 font-semibold text-sm">All FixItFirst browser data has been cleared.</p>
            </div>
          ) : (
            <button
              onClick={handleClearAll}
              className="mt-4 bg-red-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Clear all FixItFirst browser data
            </button>
          )}

          <p className="mt-4">You can also clear data manually in your browser:</p>
          <ul>
            <li><strong>Chrome / Edge:</strong> Settings → Privacy and security → Clear browsing data → Advanced → Site data</li>
            <li><strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data → Clear Data</li>
            <li><strong>Safari:</strong> Settings → Advanced → Website Data → Remove All Website Data</li>
          </ul>
        </Section>

        <Section title="Your cookie consent preference">
          <p>Your current consent status: <strong>{consent === 'accepted' ? 'Accepted' : 'Not yet set'}</strong></p>
          {consent !== 'accepted' && (
            <button
              onClick={handleAccept}
              className="mt-3 bg-orange-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Accept all cookies
            </button>
          )}
          {consent === 'accepted' && (
            <button
              onClick={() => { localStorage.removeItem('fixitfirst-cookie-consent'); setConsent(null) }}
              className="mt-3 text-sm text-gray-500 hover:text-orange-500 underline"
            >
              Withdraw consent
            </button>
          )}
        </Section>

        <Section title="Contact">
          <p>If you have questions about our use of cookies or localStorage, email us at <a href="mailto:hello@fixit-first.co.uk" className="text-orange-500 hover:underline">hello@fixit-first.co.uk</a>.</p>
        </Section>

      </div>

      <MobileNav />
    </main>
  )
}
