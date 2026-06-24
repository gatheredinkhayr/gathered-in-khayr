"use client";

import { useEffect, useState } from "react";

export const PRAYER_ORDER = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

// Fallback used if the visitor declines the location prompt.
const DEFAULT_LOCATION = { lat: 40.7128, lon: -74.006, label: "New York" };

type Timings = Record<string, string>;

type PrayerData = {
  timings: Timings;
  hijri: { day: string; month: string; year: string };
};

function parseTimeToday(time: string) {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}

export function usePrayerTimes() {
  const [data, setData] = useState<PrayerData | null>(null);
  const [locationLabel, setLocationLabel] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    function fetchTimes(lat: number, lon: number) {
      fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`)
        .then((res) => res.json())
        .then((json) => {
          const timings: Timings = json.data.timings;
          const hijri = json.data.date.hijri;
          setData({
            timings,
            hijri: { day: hijri.day, month: hijri.month.en, year: hijri.year },
          });
        })
        .catch(() => setError(true));
    }

    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocationLabel("your location");
          fetchTimes(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          setLocationLabel(DEFAULT_LOCATION.label);
          fetchTimes(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lon);
        },
        { timeout: 8000 }
      );
    } else {
      setLocationLabel(DEFAULT_LOCATION.label);
      fetchTimes(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lon);
    }
  }, []);

  const now = data ? new Date() : null;
  const nextPrayer =
    data && now
      ? PRAYER_ORDER.find((name) => parseTimeToday(data.timings[name]) > now) ?? PRAYER_ORDER[0]
      : null;

  return { data, locationLabel, error, nextPrayer };
}
