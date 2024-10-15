import TrainingPageBanner from '@/components/training/banner';

export default function TrainingPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <TrainingPageBanner params={params} />
    </main>
  );
}
