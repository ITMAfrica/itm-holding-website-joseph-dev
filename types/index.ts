import { SpringValue } from '@react-spring/web';

export type dictionary = {
  en: any;
  fr: any;
  global: any;
};

export type langType = {
  en: any;
  fr: any;
};

export type propsPage = {
  children?: React.ReactNode;
  params: {
    lang: string;
    page?: string;
    country?: string;
    step?: string;
  };
  searchParams?: {
    lang?: string;
    [x: string]: any;
  };
};

export type link = {
  href: string;
  name: string;
  current?: string;
  external: boolean;
  full?: boolean;
  closeModal?: any;
};

export interface Expertise {
  logo: string;
  title: string;
  subTitle: string;
  details: string;
  timeRange: [Date, Date];
  certificate: string;
  showcaseImage: any;
}

export interface TimelineProps {
  expertise: Expertise;
  yearTimeLineScroll: Record<string, SpringValue>;
  monthTimeLineHeight: Record<string, SpringValue>;
  monthTimeLineMarker: Record<string, SpringValue>;
}

export interface MileStoneCardProps {
  expertise: Expertise;
  contentReveal: Record<string, SpringValue>[];
}

export interface MileStoneImageProps {
  imageTransition: Function;
}

export interface MileStoneControlProps {
  expertiseIndex: number;
  setExpertiseIndex: Function;
  expertiseCount: number;
  expertiseData: Expertise[];
}
