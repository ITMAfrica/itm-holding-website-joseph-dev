import { i18n, type Locale } from '@/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Welcome to the ITM Africa web site',
  description: 'This is where everything start',
};
