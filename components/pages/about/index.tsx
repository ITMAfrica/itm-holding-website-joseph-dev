import AboutPageAbout from '@/components/about/about';
import AboutPageBanner from '@/components/about/banner';
import AboutPageEntities from '@/components/about/entities';
import AboutPageHoldingSection from '@/components/about/main';
import AboutPageMetrics from '@/components/about/metrics';
import CallToAction from '@/components/global/callToAction';
import Faqs from '@/components/global/faqs';
import Teams from '@/components/global/teams';
import { team_members } from '@/lib/team';

export default function AboutPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <AboutPageBanner params={params} />
      <AboutPageHoldingSection params={params} />
      <AboutPageEntities params={params} />
      <AboutPageAbout params={params} />
      <AboutPageMetrics params={params} />
      {/* {team_members.cd ? <Teams params={params} team={team_members.cd} /> : ''} */}
      <Faqs params={params} />
      <CallToAction params={params} />
    </main>
  );
}
