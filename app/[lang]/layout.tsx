import HomeHeader from '@/components/global/header';
import { i18n, type Locale } from '@/i18n-config';
import localFont from 'next/font/local';
import Footer from '@/components/global/footer';
import '@/styles/global.css';

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }));
// }

const candara = localFont({
  src: [
    {
      path: '../../fonts/Candara.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Candara.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../fonts/Candara_Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/Candara_Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body suppressHydrationWarning={true} className={candara.className}>
        <HomeHeader params={params} />
        <main className="w-full bg-gray_itm_bg/40">
          {children}
        </main>
        <Footer params={params} />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'ITM Africa | Welcome to the ITM Africa web site',
  description: 'This is where everything start',
};
