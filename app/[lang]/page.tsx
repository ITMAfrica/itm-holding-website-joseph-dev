import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import HomePage from '@/components/pages/home';

export default async function IndexPage({ params }: { params: any }) {
  const cookieStore = cookies();
  const isCountryDefined = cookieStore.has('country');

  if (isCountryDefined) {
    const countryName = cookieStore.get('country');
    permanentRedirect(`/${countryName}`);
  }
  console.log('Country exist', isCountryDefined);

  return (
    <>
      <HomePage params={params} />
    </>
  );
}
