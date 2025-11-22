import React from "react";
import CalendarSection, { type IClassItem } from "../CalendarSection";

export const grodziecSchedule: IClassItem[] = [
  // wtorek (2)
  { title: "Gimnastyka sportowa 5–7 lat", time: "16:00–16:45", day: 2 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "16:45–17:30", day: 2 },
  { title: "Akrobatyka – początkująca", time: "17:30–18:30", day: 2 },

  // czwartek (4)
  { title: "Gimnastyka sportowa 5–7 lat", time: "16:00–16:45", day: 4 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "16:45–17:30", day: 4 },
];

export const CalendarGrodziec = () => (
  <CalendarSection
    sectionName="Grodziec"
    location="Szkoła Podstawowa w Grodzću
Sala gimnastyczna (mała salka)
Pl. Ks. Abp. B. Dąbrowskiego 4"
    contactName="Michał Gaj"
    phone="782 560 182"
    email="michalg87@op.pl"
    schedule={grodziecSchedule}
  />
);
