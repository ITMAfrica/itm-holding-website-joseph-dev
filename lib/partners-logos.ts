/**
 * Configuration des logos "Nos partenaires" par pays.
 * Les logos par défaut sont utilisés quand aucun pays n'est sélectionné
 * ou quand le pays n'a pas de logos spécifiques.
 */

import type { StaticImageData } from 'next/image';

// Logos par défaut (hérités de l'implémentation initiale)
import client1 from '@/public/pages/home/partners/client1.png';
import client2 from '@/public/pages/home/partners/client2.png';
import client3 from '@/public/pages/home/partners/client3.png';
import client4 from '@/public/pages/home/partners/client4.png';
import client5 from '@/public/pages/home/partners/client5.png';
import client6 from '@/public/pages/home/partners/client6.png';
import client7 from '@/public/pages/home/partners/client7.png';
import client8 from '@/public/pages/home/partners/client8.png';
import client9 from '@/public/pages/home/partners/client9.png';
import client10 from '@/public/pages/home/partners/client10.png';
import client11 from '@/public/pages/home/partners/client11.png';
import client12 from '@/public/pages/home/partners/client12.png';

// Logos spécifiques Tanzanie
import tzImg1 from '@/public/pages/home/partners/tz/img1.png';
import tzImg2 from '@/public/pages/home/partners/tz/img2.png';
import tzImg3 from '@/public/pages/home/partners/tz/img3.png';
import tzImg4 from '@/public/pages/home/partners/tz/img4.png';
import tzImg5 from '@/public/pages/home/partners/tz/img5.png';
import tzImg6 from '@/public/pages/home/partners/tz/img6.png';
import tzImg7 from '@/public/pages/home/partners/tz/img7.png';
import tzImg8 from '@/public/pages/home/partners/tz/img8.png';
import tzImg9 from '@/public/pages/home/partners/tz/img9.png';
import tzImg10 from '@/public/pages/home/partners/tz/img10.png';
import tzImg11 from '@/public/pages/home/partners/tz/img11.png';
import tzImg12 from '@/public/pages/home/partners/tz/img12.png';
import tzImg13 from '@/public/pages/home/partners/tz/img13.png';
import tzImg14 from '@/public/pages/home/partners/tz/img14.png';

export type PartnerLogo = {
  src: StaticImageData;
  width: number;
  height: number;
  alt?: string;
};

/** Logos par défaut (12 logos, disposition actuelle) */
export const DEFAULT_PARTNER_LOGOS: PartnerLogo[] = [
  { src: client1, width: 100, height: 100 },
  { src: client2, width: 130, height: 130 },
  { src: client3, width: 130, height: 130 },
  { src: client4, width: 130, height: 130 },
  { src: client5, width: 130, height: 130 },
  { src: client6, width: 130, height: 130 },
  { src: client7, width: 130, height: 130 },
  { src: client8, width: 100, height: 100 },
  { src: client9, width: 130, height: 130 },
  { src: client10, width: 150, height: 150 },
  { src: client11, width: 100, height: 100 },
  { src: client12, width: 100, height: 100 },
];

/** Logos par pays (code pays → liste de logos). Ajouter d'autres pays au besoin. */
const COUNTRY_PARTNER_LOGOS: Record<string, PartnerLogo[]> = {
  tz: [
    { src: tzImg1, width: 130, height: 130 },
    { src: tzImg2, width: 130, height: 130 },
    { src: tzImg3, width: 130, height: 130 },
    { src: tzImg4, width: 130, height: 130 },
    { src: tzImg5, width: 130, height: 130 },
    { src: tzImg6, width: 130, height: 130 },
    { src: tzImg7, width: 130, height: 130 },
    { src: tzImg8, width: 130, height: 130 },
    { src: tzImg9, width: 130, height: 130 },
    { src: tzImg10, width: 130, height: 130 },
    { src: tzImg11, width: 130, height: 130 },
    { src: tzImg12, width: 130, height: 130 },
    { src: tzImg13, width: 130, height: 130 },
    { src: tzImg14, width: 130, height: 130 },
  ],
};

/**
 * Retourne les logos partenaires pour un pays donné.
 * Si le pays n'a pas de logos ou si countryCode est vide/undefined, retourne les logos par défaut.
 */
export function getPartnerLogosForCountry(countryCode: string | undefined): PartnerLogo[] {
  if (!countryCode?.trim()) return DEFAULT_PARTNER_LOGOS;
  const logos = COUNTRY_PARTNER_LOGOS[countryCode.toLowerCase()];
  return logos && logos.length > 0 ? logos : DEFAULT_PARTNER_LOGOS;
}
