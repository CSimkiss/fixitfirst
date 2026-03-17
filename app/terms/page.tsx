import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Terms of Use | FixItFirst',
  description: 'Terms of use for FixItFirst — DIY liability disclaimer, affiliate disclosure, and acceptable use policy.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:font-semibold [&_strong]:text-gray-800">
        {children}
      </div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Terms of Use</h1>
          <p className="text-gray-400 text-sm">Last updated: March 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-yellow-900 font-medium">Please read these terms carefully before using FixItFirst. By using this website you agree to be bound by them.</p>
        </div>

        <Section title="Agreement to terms">
          <p>These Terms of Use govern your access to and use of fixit-first.co.uk (the &ldquo;Site&rdquo;), operated by FixItFirst. By accessing or using the Site you agree to these terms. If you do not agree, please do not use the Site.</p>
        </Section>

        <Section title="DIY liability disclaimer">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="text-red-900 font-semibold mb-2">Important — please read this carefully.</p>
            <p className="text-red-900 text-sm leading-relaxed">All DIY repairs and home improvements described on FixItFirst are undertaken entirely at your own risk. FixItFirst provides information and guidance only. We are not liable for any injury, property damage, financial loss, or other harm arising from following our guides, whether in whole or in part.</p>
          </div>
          <p>You are responsible for:</p>
          <ul>
            <li>Assessing whether a task is within your skill level before starting</li>
            <li>Checking that you have the correct tools and materials for your specific situation</li>
            <li>Verifying that any repair complies with building regulations and local rules</li>
            <li>Obtaining any necessary permissions from your landlord, freeholder, or local authority</li>
            <li>Stopping work and calling a qualified professional if you are unsure at any point</li>
          </ul>
          <p>Our guides include clear &ldquo;Stop and call a professional&rdquo; sections — please follow this advice. Some tasks (such as work on gas systems, electrical consumer units, and structural elements) must by law be carried out by a qualified professional. We note these restrictions where relevant, but you must check current regulations before starting any work.</p>
        </Section>

        <Section title="No professional advice">
          <p>The content on FixItFirst is for general informational and educational purposes only. It does not constitute professional advice of any kind (including but not limited to legal, structural engineering, electrical, plumbing, or surveying advice).</p>
          <p>Every property is different. What works in one situation may not be appropriate for yours. If in doubt, consult a qualified tradesperson or professional.</p>
        </Section>

        <Section title="Affiliate links disclosure">
          <p>FixItFirst participates in affiliate programmes including Amazon Associates and the Awin network. This means that when you click certain product or retailer links on our site and make a purchase, we may earn a small commission. This comes at no additional cost to you.</p>
          <p>We clearly mark affiliate links on our guide pages. Our editorial content is not influenced by affiliate relationships — we only recommend tools and materials that are genuinely useful for the task.</p>
          <p>As an Amazon Associate we earn from qualifying purchases.</p>
        </Section>

        <Section title="Acceptable use">
          <p>When using FixItFirst you agree not to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose or in a way that violates any applicable law or regulation</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its related systems</li>
            <li>Scrape, crawl, or systematically download content from the Site without our permission</li>
            <li>Post, transmit, or otherwise make available any content that is unlawful, harmful, abusive, defamatory, or otherwise objectionable</li>
            <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            <li>Introduce any viruses, malware, or other harmful code to the Site</li>
          </ul>
        </Section>

        <Section title="Intellectual property">
          <p>All content on FixItFirst — including text, images, illustrations, and code — is owned by or licensed to FixItFirst and protected by copyright. You may not reproduce, distribute, or create derivative works from our content without our prior written permission, except for personal, non-commercial use.</p>
        </Section>

        <Section title="User accounts">
          <p>If you create an account you are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorised use of your account.</p>
          <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
        </Section>

        <Section title="Limitation of liability">
          <p>To the fullest extent permitted by law, FixItFirst and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or its content, including but not limited to personal injury, property damage, or loss of data.</p>
          <p>Our total liability to you for any claim arising out of or related to these terms or your use of the Site shall not exceed £100.</p>
          <p>Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.</p>
        </Section>

        <Section title="Governing law">
          <p>These terms are governed by the laws of England and Wales. Any disputes arising out of or related to these terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        </Section>

        <Section title="Changes to these terms">
          <p>We may update these terms from time to time. We will update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the Site after a change constitutes acceptance of the updated terms.</p>
        </Section>

        <Section title="Contact">
          <p>If you have any questions about these terms please contact us at <a href="mailto:hello@fixit-first.co.uk" className="text-orange-500 hover:underline">hello@fixit-first.co.uk</a>.</p>
        </Section>

      </div>

      <MobileNav />
    </main>
  )
}
