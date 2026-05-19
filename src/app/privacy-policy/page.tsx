import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Torridon Homes',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-torridon-cream text-torridon-forest">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24">
        <h1 className="text-4xl md:text-5xl font-torridon-serif font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-base leading-relaxed font-torridon-sans">
          <section>
            <h2 className="text-2xl font-torridon-serif font-bold mb-4">Who We Are</h2>
            <p>
              Torridon Homes is a boutique property developer operating across the Central Belt of Scotland.
              Our registered address is Unit 37 Imex Centre, Dryden Road, Loanhead, EH20 9LZ, Scotland.
              We are committed to protecting your personal data and respecting your privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-torridon-serif font-bold mb-4">What Data We Collect</h2>
            <p>We may collect and process the following personal data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name and contact details (email address, phone number)</li>
              <li>Address and property details</li>
              <li>Information you provide when contacting us or requesting a quote</li>
              <li>Technical data such as IP address and browser type via analytics tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-torridon-serif font-bold mb-4">How We Use Cookies</h2>
            <p>
              We use cookies and similar technologies to improve your browsing experience, analyse site traffic, and understand
              where our visitors come from. You can choose to accept or decline cookies when you first visit our site.
              Essential cookies necessary for the site to function are always active.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-torridon-serif font-bold mb-4">How We Use Your Data</h2>
            <p>Your personal data is used to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to enquiries and provide quotes</li>
              <li>Deliver our property development services</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-torridon-serif font-bold mb-4">Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes we collected it for,
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-torridon-serif font-bold mb-4">Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request erasure of your personal data (&quot;right to be forgotten&quot;)</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-torridon-serif font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your data, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Email:{" "}
                <a href="mailto:hello@torridon-homes.co.uk" className="underline text-torridon-gold">
                  hello@torridon-homes.co.uk
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+441315550123" className="underline text-torridon-gold">
                  +44 131 555 0123
                </a>
              </li>
              <li>Address: Unit 37 Imex Centre, Dryden Road, Loanhead, EH20 9LZ, Scotland</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
