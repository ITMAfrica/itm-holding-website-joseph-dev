import HomeHeader from '@/components/global/header';
import { type Locale } from '@/i18n-config';
import localFont from 'next/font/local';
import Footer from '@/components/global/footer';
import '@/styles/global.css';

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

export const metadata = {
  title: 'ITM Africa | Welcome to the ITM Africa web site',
  description:
    'ITM HR is your strategic partner in HR solutions in Africa. With a proven track record of managing over 15,000 employees in 18 countries, we tailor our services—from recruitment and employee management to training and HR compliance—to fit your specific needs',
};

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const lang = await params;
  return (
    <html lang={lang.lang}>
      <body suppressHydrationWarning={true} className={candara.className}>
        <HomeHeader params={params} />
        <main className="w-full bg-gray_itm_bg/40 text-black_itm">
          {children}
        </main>
        <Footer params={params} />
      </body>
    </html>
  );
}
