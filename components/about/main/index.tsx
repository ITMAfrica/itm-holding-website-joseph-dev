import AboutMainAdventure from './adventure';
import AboutMainGreatness from './greatness';

export default function AboutPageMain({ params }: { params: any }) {
  return (
    <>
      <AboutMainAdventure params={params} />
      <AboutMainGreatness params={params} />
    </>
  );
}
