import { i18n, type Locale } from '@/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return <>{children}</>;
}

export const metadata = {
  title: 'ITM Africa country | Welcome to the ITM Africa web site',
  description: 'This is where everything start',
};
