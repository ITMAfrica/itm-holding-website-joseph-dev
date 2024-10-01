import { MileStoneImageProps } from '@/types';
import { a, SpringValue, to } from '@react-spring/web';
import experienceData from '@/helpers';
import Image from 'next/image';

export default function MileStoneImage({
  imageTransition,
}: MileStoneImageProps) {
  return imageTransition(
    (style: Record<string, SpringValue>, index: number) => {
      const expertise = experienceData.expertise[index];
      return (
        <a.div
          className="-z-10 absolute right-0 top-1/2 hidden semi-lg:block md:w-[240px] semi-lg:w-[350px] lg:w-[460px]"
          style={{
            opacity: style.opacity.to((o) => `${o}`),
            transform: to(
              [style.y, style.rotateX, style.rotateY, style.rotateZ],
              (y, rx, ry, rz) =>
                `translateY(${y}) translateX(-12%) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`
            ),
          }}
        >
          <Image
            alt={`Certificate of ${expertise.title}`}
            className="rounded-[4px] relative after:absolute after:inset-0 after:bg-grey-5 -z-10 ring-1 ring-grey-ea"
            src={expertise.showcaseImage}
            width={720}
            height={720}
          />
        </a.div>
      );
    }
  );
}
