const APIFY_TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = 'nH2AHrwxeTRJoN5hX';

export async function getLatestReelUrls(limit = 3): Promise<string[]> {
  if (!APIFY_TOKEN) {
    console.error('APIFY_TOKEN não configurado.');
    return [];
  }

  try {
    const res = await fetch(
      `https://api.apify.com/v2/acts/${ACTOR_ID}/runs/last/dataset/items?token=${APIFY_TOKEN}&status=SUCCEEDED`,
      {
        next: { revalidate: 60 * 60 * 24 * 30 }, // 30 dias, casa com a frequência do schedule
      }
    );

    if (!res.ok) return [];

    const items: { url?: string; postUrl?: string; shortCode?: string }[] = await res.json();

    return items
      .map((item) => item.url ?? item.postUrl) // ajusta pro campo real do seu output
      .filter((url): url is string => Boolean(url))
      .slice(0, limit);
  } catch (err) {
    console.error('Erro ao ler dataset do Apify:', err);
    return [];
  }
}