'use client';
import { useState, useEffect } from 'react';
import {
  useSpring,
  useSpringRef,
  useTrail,
  useTransition,
} from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '@/components/global/section_title';
import Timeline from './timeLine';
import MileStoneCard from './card';
import MileStoneImage from './image';
import MileStoneControl from './control';
import experienceData, { experienceTimelineCalculator } from '@/helpers';

export default function AboutPageMileStone({ params }: { params: any }) {
  const [expertiseIndex, setExpertiseIndex] = useState<number>(0);
  const expertise = experienceData.expertise[expertiseIndex];
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px 0px -512px',
  });
  const [viewed, setViewed] = useState<boolean>(false);

  const { YEAR_TIMELINE_POS, MONTH_TIMELINE_HEIGHT } =
    experienceTimelineCalculator(expertise);
  useEffect(() => {
    if (inView && !viewed) {
      setViewed(true);
    }
  }, [inView]);
  useEffect(() => {
    if (inView) {
      // image animations
      imageTransRef.start();
      // card animations
      CRApi.set({ y: 32, opacity: 0 });
      CRApi.start({
        y: 0,
        opacity: 1,
        delay: 500,
        config: { tension: 400, friction: 40 },
      });
      // timeline animations
      YTSApi.update({ y: -YEAR_TIMELINE_POS });
      YTSApi.start();
      MTHApi.update({ height: MONTH_TIMELINE_HEIGHT });
      MTHApi.start();
      MTMApi.set({ opacity: 0 });
      MTMApi.start({ opacity: 1 });
    }
  }, [viewed, expertiseIndex]);

  // Image Animations
  const imageTransRef = useSpringRef();
  const imageTransition = useTransition(expertiseIndex, {
    ref: imageTransRef,
    keys: null,
    from: { opacity: 0, rotateX: 0, rotateY: 0, rotateZ: 0, y: '-40%' },
    enter: {
      opacity: 1,
      rotateX: 4,
      rotateY: -24,
      rotateZ: 5,
      y: '-50%',
      delay: 500,
    },
    leave: {
      opacity: 0,
      rotateX: 0,
      rotateY: -48,
      rotateZ: 5,
      y: '-50%',
      config: { tension: 350 },
    },
  });

  // Card Animations
  const [contentReveal, CRApi] = useTrail(
    4,
    {
      from: { y: 32, opacity: 0 },
    },
    []
  );

  // Timeline Animations
  const [yearTimeLineScroll, YTSApi] = useSpring(
    () => ({
      from: { y: -275 },
    }),
    []
  );

  const [monthTimeLineHeight, MTHApi] = useSpring(
    () => ({
      from: { height: 0 },
    }),
    []
  );

  const [monthTimeLineMarker, MTMApi] = useSpring(() => ({
    opacity: 0,
  }));
  return (
    <section ref={ref} className="bg-white">
      <div className="w-10/12 mx-auto pt-10">
        <SectionTitle text="NOTRE HISTOIRE" center={true} />
        <h4 className="text-5xl text-blue_itm_primary font-bold text-center mb-3">
          L'épopée de ITM Holding
        </h4>
        <p className="w-3/5 mx-auto text-center">
          Découvrez les étapes clés qui ont façonné ITM Africa en un leader du
          développement du capital humain et des solutions d'affaires en afrique
        </p>
        <div className="mt-6">
          <div aria-label="experience carousel">
            <div
              className="relative flex experience-content"
              id={`experience-item-${expertiseIndex + 1}`}
              role="tabpanel"
              style={{ perspective: '700px' }}
            >
              <Timeline
                expertise={expertise}
                yearTimeLineScroll={yearTimeLineScroll}
                monthTimeLineHeight={monthTimeLineHeight}
                monthTimeLineMarker={monthTimeLineMarker}
              />
              <MileStoneCard
                expertise={expertise}
                contentReveal={contentReveal}
              />
              <MileStoneImage imageTransition={imageTransition} />
            </div>
          </div>
          <MileStoneControl
            expertiseData={experienceData.expertise}
            expertiseIndex={expertiseIndex}
            setExpertiseIndex={setExpertiseIndex}
            expertiseCount={experienceData.expertise.length}
          />
        </div>
      </div>
    </section>
  );
}
