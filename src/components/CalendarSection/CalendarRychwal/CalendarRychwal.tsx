import React from "react";
import CalendarSection, { type IClassItem } from "../CalendarSection";
import SectionScheduleCalendar from "../../SectionScheduleCalendar/SectionScheduleCalendar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const rychwalSchedule: IClassItem[] = [
  // poniedziałek (1)
  { title: "Gimnastyka sportowa 4–5 lat", time: "16:00–16:45", day: 1 },
  { title: "Gimnastyka sportowa 6–7 lat", time: "16:45–17:30", day: 1 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "17:30–18:45", day: 1 },

  // środa (3)
  { title: "Gimnastyka sportowa 4–5 lat", time: "16:00–16:45", day: 3 },
  { title: "Gimnastyka sportowa 6–7 lat", time: "16:45–17:30", day: 3 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "17:30–18:45", day: 3 },

  // piątek (5) – Akrobatyka
  { title: "Akrobatyka – początkująca", time: "15:30–16:30", day: 5 },
  { title: "Akrobatyka – początkująca", time: "16:30–17:30", day: 5 },
  { title: "Akrobatyka – średniozaawansowana", time: "17:30–18:30", day: 5 },
  { title: "Akrobatyka – średniozaawansowana", time: "18:30–19:30", day: 5 },
  { title: "Akrobatyka – średniozaawansowana", time: "19:30–20:30", day: 5 },
];
export const CalendarRychwal = () => (
  <Wrapper>
    <CalendarSection
      sectionName="Rychwał"
      location="Hala sportowa w Rychwale ul. Sportowa 34"
      contactName="Michał Gaj"
      phone="782 560 182"
      email="michalg87@op.pl"
      schedule={rychwalSchedule}
    />
    <SectionScheduleCalendar sectionName="Rychwał" schedule={rychwalSchedule} />
    ;
  </Wrapper>
);
