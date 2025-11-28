import React from "react";
import CalendarSection, { type IClassItem } from "../CalendarSection";
import styled from "styled-components";
import SectionScheduleCalendar from "../../SectionScheduleCalendar/SectionScheduleCalendar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const tuliszkowSchedule: IClassItem[] = [
  // ŚRODA (3) I PIĄTEK (5) – dzieci 4–7
  {
    title: "Gimnastyka sportowa 4–5 lat",
    time: "16:30–17:15",
    day: 3, // Środa
  },
  {
    title: "Gimnastyka sportowa 6–7 lat",
    time: "17:15–18:15",
    day: 3, // Środa
  },
  {
    title: "Gimnastyka sportowa 4–5 lat",
    time: "16:30–17:15",
    day: 5, // Piątek
  },
  {
    title: "Gimnastyka sportowa 6–7 lat",
    time: "17:15–18:15",
    day: 5, // Piątek
  },

  // WTOREK (2) I CZWARTEK (4) – gimnastyka 8+ + judo młodsza
  {
    title: "Gimnastyka sportowa 8+ lat",
    time: "16:30–17:30",
    day: 2, // Wtorek
  },
  {
    title: "Judo – grupa młodsza (8–12 lat)",
    time: "17:30–18:45",
    day: 2, // Wtorek
  },
  {
    title: "Gimnastyka sportowa 8+ lat",
    time: "16:30–17:30",
    day: 4, // Czwartek
  },
  {
    title: "Judo – grupa młodsza (8–12 lat)",
    time: "17:30–18:45",
    day: 4, // Czwartek
  },

  // WTOREK, ŚRODA, CZWARTEK – judo starsza
  {
    title: "Judo – grupa starsza (12+ lat)",
    time: "18:30–20:00",
    day: 2, // Wtorek
  },
  {
    title: "Judo – grupa starsza (12+ lat)",
    time: "18:30–20:00",
    day: 3, // Środa
  },
  {
    title: "Judo – grupa starsza (12+ lat)",
    time: "18:30–20:00",
    day: 4, // Czwartek
  },

  // PONIEDZIAŁEK (1) – akrobatyka (cztery bloki)
  {
    title: "Akrobatyka – początkująca",
    time: "16:30–17:30",
    day: 1, // Poniedziałek
  },
  {
    title: "Akrobatyka – początkująca",
    time: "17:30–18:30",
    day: 1, // Poniedziałek
  },
  {
    title: "Akrobatyka – średniozaawansowana",
    time: "18:30–19:30",
    day: 1, // Poniedziałek
  },
  {
    title: "Akrobatyka – średniozaawansowana",
    time: "19:30–20:30",
    day: 1, // Poniedziałek
  },
];

export const CalendarTuliszkow = () => (
  <Wrapper>
    <CalendarSection
      sectionName="Tuliszków"
      location="Hala sportowa w Tuliszkowie 
ul. Nortowska 1"
      contactName="Michał Gaj"
      phone="782 560 182"
      email="michalg87@op.pl"
      schedule={tuliszkowSchedule}
    />
    <SectionScheduleCalendar
      sectionName="Tuliszków"
      schedule={tuliszkowSchedule}
    />
  </Wrapper>
);
