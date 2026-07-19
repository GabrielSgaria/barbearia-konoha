// InstagramSection.tsx (Server Component)
import { getLatestReelUrls } from '@/lib/apify-instagram';

const FALLBACK_REELS = [
  "https://www.instagram.com/barbearia.konoha/reel/DXFZQUJEQYB/",
  "https://www.instagram.com/rolezandocuritiba/reel/DKLEqUbRXs_/",
  "https://www.instagram.com/igorgabarber/reel/Da6f2gICOka/",
];

export async function InstagramSection() {
  const fetched = await getLatestReelUrls(3);
  const reelUrls = fetched.length > 0 ? fetched : FALLBACK_REELS;

    function getInstagramEmbedUrl(url: string): string | undefined {
    const match = url.match(
      /^https?:\/\/(?:www\.)?instagram\.com\/(?:[^/]+\/)?(p|reel|tv)\/([^/?#]+)/
    );

    if (!match) {
      return undefined;
    }

    const [, type, shortcode] = match;

    return `https://www.instagram.com/${type}/${shortcode}/embed`;
  }


  return (
    <section className="py-16 bg-muted overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Siga-nos no Instagram</h2>
        <div className="flex flex-col gap-5 items-center md:flex-row justify-center md:gap-2 lg:gap-10">
          {reelUrls.map((url) => (
            <iframe
              key={url}
              src={getInstagramEmbedUrl(url)}
              width="320"
              height="550"
              className="rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}