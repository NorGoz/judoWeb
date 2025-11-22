import React from "react";
import CalendarSection, { type IClassItem } from "../CalendarSection";

export const tuliszkowSchedule: IClassItem[] = [
  // środa (3) i piątek (5) – dzieci 4–7
  { title: "Gimnastyka sportowa 4–5 lat", time: "16:30–17:15", day: 3 },
  { title: "Gimnastyka sportowa 6–7 lat", time: "17:15–18:15", day: 3 },

  { title: "Gimnastyka sportowa 4–5 lat", time: "16:30–17:15", day: 5 },
  { title: "Gimnastyka sportowa 6–7 lat", time: "17:15–18:15", day: 5 },

  // wtorek (2) i czwartek (4) – 8+ + judo młodsza
  { title: "Gimnastyka sportowa 8+ lat", time: "16:30–17:30", day: 2 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "17:30–18:45", day: 2 },

  { title: "Gimnastyka sportowa 8+ lat", time: "16:30–17:30", day: 4 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "17:30–18:45", day: 4 },

  // wtorek, środa, czwartek – judo starsza
  { title: "Judo – grupa starsza (12+ lat)", time: "18:30–20:00", day: 2 },
  { title: "Judo – grupa starsza (12+ lat)", time: "18:30–20:00", day: 3 },
  { title: "Judo – grupa starsza (12+ lat)", time: "18:30–20:00", day: 4 },

  // poniedziałek – akrobatyka (założyłem bloki 1h)
  { title: "Akrobatyka – początkująca", time: "16:30–17:30", day: 1 },
  { title: "Akrobatyka – początkująca", time: "17:30–18:30", day: 1 },
  { title: "Akrobatyka – średniozaawansowana", time: "18:30–19:30", day: 1 },
  { title: "Akrobatyka – średniozaawansowana", time: "19:30–20:30", day: 1 },
];

export const CalendarTuliszkow = () => (
  <CalendarSection
    sectionName="Tuliszków"
    location="Hala sportowa w Tuliszkowie 
ul. Nortowska 1"
    contactName="Michał Gaj"
    phone="782 560 182"
    email="michalg87@op.pl"
    schedule={tuliszkowSchedule}
  />
);
