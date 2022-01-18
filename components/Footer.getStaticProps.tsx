// In a separate file for now as the package.json files seems to be bundled if this file exists in Footer.tsx

export async function getStaticProps() {
  const [{ version: next }, { version: react }, { version: tailwind }] =
    await Promise.all([
      import('next/package.json'),
      import('react/package.json'),
      import('tailwindcss/package.json'),
    ])
  return { next, react, tailwind }
}
