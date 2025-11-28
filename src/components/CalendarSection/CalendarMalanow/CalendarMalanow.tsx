import React from "react";
import CalendarSection, { type IClassItem } from "../CalendarSection";
import styled from "styled-components";
import SectionScheduleCalendar from "../../SectionScheduleCalendar/SectionScheduleCalendar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const malanowSchedule: IClassItem[] = [
  // poniedziałek (1)
  { title: "Gimnastyka sportowa 4–5 lat", time: "16:30–17:15", day: 1 },
  { title: "Gimnastyka sportowa 6–7 lat", time: "17:15–18:00", day: 1 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "18:00–19:00", day: 1 },

  // środa (3)
  { title: "Gimnastyka sportowa 4–5 lat", time: "16:30–17:15", day: 3 },
  { title: "Gimnastyka sportowa 6–7 lat", time: "17:15–18:00", day: 3 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "18:00–19:00", day: 3 },
];

export const CalendarMalanow = () => (
  <Wrapper>
    <CalendarSection
      sectionName="Malanów"
      location="Ośrodek Sportu i Rekreacji - sala gimnastyczna
ul. Parkowa 29"
      contactName="Michał Gaj"
      phone="782 560 182"
      email="michalg87@op.pl"
      schedule={malanowSchedule}
    />
    <SectionScheduleCalendar sectionName="Malanów" schedule={malanowSchedule} />
  </Wrapper>
);
