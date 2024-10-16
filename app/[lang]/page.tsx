import HomePage from '@/components/pages/home';

export const metadata = {
  title: 'ITM Africa | Welcome to the ITM Africa web site',
  description: 'This is where everything start',
};

export default function IndexPage({ params }: { params: any }) {
  return <HomePage params={params} />;
}
