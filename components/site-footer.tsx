export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="font-semibold">Car Detailing Saha</div>
          <p className="mt-2 leading-relaxed">Quality detailing with a personal touch. We shine with details.</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 leading-relaxed">
            <li>
              Phone: <span aria-label="phone number">XXX-XXX-XXXX</span>
            </li>
            <li>Email: info@example.com</li>
            <li>Hours: Mon–Sat, 9am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm py-3 border-t border-border">
        © {new Date().getFullYear()} Car Detailing Saha. All rights reserved.
      </div>
    </footer>
  )
}
