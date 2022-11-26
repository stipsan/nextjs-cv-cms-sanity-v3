import 'tailwindcss/tailwind.css'

import { Analytics } from 'app/analytics'

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className="print:[zoom:75%]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
