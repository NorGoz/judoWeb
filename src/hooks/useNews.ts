import { useEffect, useState } from "react";
import type { NewsItem } from "../pages/Home/Home";

const NEWS_ENDPOINT =
  import.meta.env.VITE_NEWS_ENDPOINT ??
  "https://script.google.com/macros/s/AKfycbwbk2Qxuf_eT0K5uK5Kf0NSRafMW2tvzmr6-Dch-mCO3BhYPsQGpUQpbNpMNOChdbpL/exec";

export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!NEWS_ENDPOINT) {
      setError("Brak endpointu newsów");
      return;
    }

    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("Fetching news from:", NEWS_ENDPOINT);
        const res = await fetch(NEWS_ENDPOINT);
        if (!res.ok) {
          throw new Error("Błąd HTTP " + res.status);
        }
        const data = await res.json();
        setNews(data.news ?? []);
        console.log("Fetched news:", data);
      } catch (err: any) {
        console.error(err);
        setError("Nie udało się pobrać aktualności.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};
