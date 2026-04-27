import { readFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { COUNTRY_SITE_CODES } from '@/lib/country-site-codes';

export const runtime = 'nodejs';

/** Nigeria uses ITM Services Ltd profile; all other country sites use the shared HR company profile. */
const NG_PROFILE = path.join(
  process.cwd(),
  'companyprofile',
  'ITM SERVICES LTD COMPANY PROFILE 1.pdf'
);

const HR_PROFILE = path.join(
  process.cwd(),
  'companyprofile',
  'Profil HR .pdf'
);

function pdfPathForCode(code: string): string {
  return code === 'ng' ? NG_PROFILE : HR_PROFILE;
}

function downloadFilenameForCode(code: string): string {
  return code === 'ng'
    ? 'itm-company-profile-ng.pdf'
    : 'itm-company-profile.pdf';
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ code: string }> }
) {
  const { code: raw } = await context.params;
  const code = (raw ?? '')
    .toLowerCase()
    .replace(/\.pdf$/i, '');

  if (!/^[a-z]{2}$/.test(code) || !COUNTRY_SITE_CODES.has(code)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const filePath = pdfPathForCode(code);

  try {
    const buffer = await readFile(filePath);
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${downloadFilenameForCode(code)}"`,
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return new NextResponse('PDF not found', { status: 404 });
  }
}
