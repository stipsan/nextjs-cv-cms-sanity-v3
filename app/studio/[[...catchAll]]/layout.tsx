import 'tailwindcss/tailwind.css'

import { Analytics } from 'app/analytics'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overscroll-none">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
