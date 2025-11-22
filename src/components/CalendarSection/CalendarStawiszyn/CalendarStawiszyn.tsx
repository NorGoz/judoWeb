import React from "react";
import CalendarSection, { type IClassItem } from "../CalendarSection";

export const stawiszynSchedule: IClassItem[] = [
  // wtorek (2)
  { title: "Gimnastyka sportowa 5–7 lat", time: "16:15–17:00", day: 2 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "17:00–18:00", day: 2 },

  // czwartek (4)
  { title: "Gimnastyka sportowa 5–7 lat", time: "16:15–17:00", day: 4 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "17:00–18:00", day: 4 },
];

export const CalendarStawiszyn = () => (
  <CalendarSection
    sectionName="Stawiszyn"
    location="Szkoła Podstawowa w Stawiszynie Sala gimnastyczna ul. Szkolna 8"
    contactName="Michał Gaj"
    phone="782 560 182"
    email="michalg87@op.pl"
    schedule={stawiszynSchedule}
  />
);
