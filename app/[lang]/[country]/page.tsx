import AboutPage from '@/components/pages/about';
import FormationsPage from '@/components/pages/formations';
import HomePage from '@/components/pages/home';
import NewsPage from '@/components/pages/news';
import ServicesPage from '@/components/pages/services';

export default function PageCountry({ params }: { params: any }) {
  switch (params.country) {
    case "tz":
      return <HomePage params={params} />;
    case "tg":
      return <HomePage params={params} />;
    case "ao":
      return <HomePage params={params} />;
    case "bn":
      return <HomePage params={params} />;
    case "bu":
      return <HomePage params={params} />;
    case "cg":
      return <HomePage params={params} />;
    case "cm":
      return <HomePage params={params} />;
    case "de":
      return <HomePage params={params} />;
    case "gb":
      return <HomePage params={params} />;
    case "ke":
      return <HomePage params={params} />;
    case "ng":
      return <HomePage params={params} />;
    case "ug":
      return <HomePage params={params} />;
    case "za":
      return <HomePage params={params} />;
    case "zm":
      return <HomePage params={params} />;
    case "rw":
      return <HomePage params={params} />;
    case "about-us":
      return <AboutPage params={params} />;
    case "a-propos-de-nous":
      return <AboutPage params={params} />;
    case "services":
      return <ServicesPage params={params} />;
    case "training":
      return <FormationsPage params={params} />;
    case "formations":
      return <FormationsPage params={params} />;
    case "news":
      return <NewsPage params={params} />;
    case "actualites":
      return <NewsPage params={params} />;
  }
}
