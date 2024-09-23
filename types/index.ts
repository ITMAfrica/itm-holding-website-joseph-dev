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
    page1?: string;
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
  current: string;
  external: boolean;
};
