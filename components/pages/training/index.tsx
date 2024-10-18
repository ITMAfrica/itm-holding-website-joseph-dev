import CallToAction from '@/components/global/callToAction';
import Faqs from '@/components/global/faqs';
import TrainingPageAbout from '@/components/training/about';
import TrainingPageBanner from '@/components/training/banner';
import TrainingPageEvents from '@/components/training/events';
import TrainingPageMainSection from '@/components/training/main';
import TrainingPagePastEventsSection from '@/components/training/pastEvents';
import TrainingpagePopular from '@/components/training/popular';
import TrainingPageTeamBuildingSection from '@/components/training/teambuilding';
import TrainingPageTrainingHR from '@/components/training/trainingHR';

export default function TrainingPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <TrainingPageBanner params={params} />
      <TrainingPageAbout params={params} />
      <TrainingpagePopular params={params} />
      <TrainingPageTrainingHR params={params} />
      <TrainingPageMainSection params={params} />
      <TrainingPageEvents params={params} />
      <TrainingPagePastEventsSection params={params} />
      <TrainingPageTeamBuildingSection params={params} />
      <Faqs />
      <CallToAction params={params} />
    </main>
  );
}
