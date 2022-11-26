import 'tailwindcss/tailwind.css'

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className="print:[zoom:75%]">{children}</body>
    </html>
  )
}
