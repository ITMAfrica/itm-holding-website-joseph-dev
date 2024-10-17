import TrainingPageAbout from '@/components/training/about';
import TrainingPageBanner from '@/components/training/banner';
import TrainingPageEvents from '@/components/training/events';
import TrainingPageMainSection from '@/components/training/main';
import TrainingpagePopular from '@/components/training/popular';
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
    </main>
  );
}
