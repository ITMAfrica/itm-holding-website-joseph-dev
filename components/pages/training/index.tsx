import TrainingageAbout from '@/components/training/about';
import TrainingPageBanner from '@/components/training/banner';

export default function TrainingPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <TrainingPageBanner params={params} />
      <TrainingageAbout params={params} />
    </main>
  );
}
