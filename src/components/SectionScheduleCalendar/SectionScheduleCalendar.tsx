import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

export interface IClassItem {
  title: string;
  time: string; // "HH:MM–HH:MM"
  day: number; // 0 - niedziela, 1 - poniedziałek, ... 6 - sobota
}

interface SectionScheduleCalendarProps {
  sectionName: string;
  schedule: IClassItem[];
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  background: #ffffff;
  padding: 32px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin: 40px auto;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeInUp} 0.25s ease-out;

  @media (max-width: 768px) {
    margin: 24px auto;
    padding: 20px 14px;
    gap: 20px;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  color: #0a3978;
  font-size: 24px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TodayLabel = styled.div`
  font-size: 13px;
  color: #555;
`;

const Strong = styled.span`
  font-weight: 600;
`;

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr);
  gap: 20px;
  min-height: 350px;

  @media (min-width: 820px) {
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  }
`;

const MonthBox = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 16px;
`;

const MonthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;
`;

const MonthTitle = styled.div`
  font-weight: 600;
  color: #0a3978;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  border: none;
  border-radius: 999px;
  width: 30px;
  height: 30px;
  background: #e2ecff;
  color: #0a3978;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, transform 0.1s ease;

  &:hover {
    background: #cbd8ff;
  }

  &:active {
    transform: scale(0.96);
  }
`;

const WeekDaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 11px;
  text-transform: uppercase;
  color: #718096;
  margin-bottom: 6px;
  gap: 4px;
`;

const WeekDay = styled.div`
  text-align: center;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const DayCell = styled.button<{
  isToday?: boolean;
  inCurrentMonth?: boolean;
  hasClasses?: boolean;
  isSelected?: boolean;
}>`
  border: none;
  min-height: 36px;
  border-radius: 8px;
  padding: 6px 0;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  background: ${({ isSelected, isToday, hasClasses }) =>
    isSelected
      ? "#0a3978"
      : isToday
      ? "#e6f0ff"
      : hasClasses
      ? "#eef7ff"
      : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#1a202c")};
  opacity: ${({ inCurrentMonth }) => (inCurrentMonth ? 1 : 0.45)};
  transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ isSelected }) =>
      isSelected
        ? "0 3px 8px rgba(10,57,120,0.4)"
        : "0 2px 6px rgba(148,163,184,0.6)"};
  }

  @media (max-width: 480px) {
    padding: 4px 0;
    font-size: 12px;
    min-height: auto;
  }
`;

const DayNumber = styled.div`
  font-weight: 500;
`;

const DayDot = styled.div<{ isToday?: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  margin: 3px auto 0;
  background: ${({ isToday }) => (isToday ? "#0a3978" : "#38a169")};
`;

const SidePanel = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 14px 16px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 820px) {
    order: -1;
  }
`;

const SideTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #0a3978;
`;

const Small = styled.span`
  font-size: 12px;
  color: #718096;
`;

const NextClassItem = styled.div`
  padding: 8px 10px;
  border-radius: 8px;
  background: #f8fafc;
  border-left: 4px solid #0a3978;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const NextClassTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1a202c;
`;

const NextClassMeta = styled.div`
  font-size: 12px;
  color: #4a5568;
`;

const SelectedDayBox = styled.div`
  margin-top: 6px;
  padding: 10px 12px;
  border-radius: 10px;
  background: #f4f7fb;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SelectedDayTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #0a3978;
`;

const SelectedDayItem = styled.div`
  font-size: 12px;
  color: #2d3748;
  display: flex;
  justify-content: space-between;
`;

const NoClassesText = styled.div`
  font-size: 12px;
  color: #a0aec0;
  font-style: italic;
`;

// ---------------------- helpers -------------------------

const dayNamesShort = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
const monthNames = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

const formatDateLabel = (d: Date) => {
  return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
};

const getNextOccurrence = (cls: IClassItem, from: Date = new Date()): Date => {
  const [startH, startM] = cls.time.split("–")[0].split(":").map(Number);
  const base = new Date(from);
  const todayDow = base.getDay(); // 0..6
  let diff = (cls.day + 7 - todayDow) % 7;

  const next = new Date(base);
  next.setDate(base.getDate() + diff);
  next.setHours(startH, startM, 0, 0);

  if (next <= from) {
    next.setDate(next.getDate() + 7);
  }

  return next;
};

// generate calendar matrix (Mon-first)
const generateMonthDays = (year: number, month: number): Date[] => {
  const firstOfMonth = new Date(year, month, 1);
  const firstDayMonBased = (firstOfMonth.getDay() + 6) % 7; // 0=Mon ... 6=Sun

  const startDate = new Date(year, month, 1 - firstDayMonBased);
  const days: Date[] = [];

  for (let i = 0; i < 42; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    days.push(d);
  }

  return days;
};

// --------------------------------------------------------

const SectionScheduleCalendar: React.FC<SectionScheduleCalendarProps> = ({
  sectionName,
  schedule,
}) => {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0,
    0
  );

  const [viewDate, setViewDate] = useState(
    new Date(now.getFullYear(), now.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(now);

  const monthDays = useMemo(
    () => generateMonthDays(viewDate.getFullYear(), viewDate.getMonth()),
    [viewDate]
  );

  // 🔹 Najbliższe zajęcia – już liczone od "teraz", więc zawsze przyszłość
  const upcoming = useMemo(() => {
    const enriched = schedule.map((cls) => ({
      cls,
      next: getNextOccurrence(cls, now),
    }));

    enriched.sort((a, b) => a.next.getTime() - b.next.getTime());

    return enriched.slice(0, 3);
  }, [schedule, now]);

  // 🔹 Zajęcia dla wybranego dnia – NIE pokazujemy przeszłości
  const classesForDate = useMemo(() => {
    if (!selectedDate) return [];

    // jeśli dzień w przeszłości: nic nie pokazujemy
    if (selectedDate < startOfToday) {
      return [];
    }

    const dow = selectedDate.getDay();

    const classesInDay = schedule.filter((cls) => cls.day === dow);

    // jeśli wybrany dzień to dzisiaj – filtrujemy godziny, które już minęły
    const isToday =
      selectedDate.getFullYear() === now.getFullYear() &&
      selectedDate.getMonth() === now.getMonth() &&
      selectedDate.getDate() === now.getDate();

    const filtered = classesInDay.filter((cls) => {
      if (!isToday) return true; // przyszłe dni – wszystkie zajęcia

      const [h, m] = cls.time.split("–")[0].split(":").map(Number);
      const classDateTime = new Date(selectedDate);
      classDateTime.setHours(h, m, 0, 0);
      return classDateTime >= now; // tylko te, które jeszcze się odbędą
    });

    return filtered.slice().sort((a, b) => {
      const [ah, am] = a.time.split("–")[0].split(":").map(Number);
      const [bh, bm] = b.time.split("–")[0].split(":").map(Number);
      return ah * 60 + am - (bh * 60 + bm);
    });
  }, [selectedDate, schedule, now, startOfToday]);

  // 🔹 Dzień ma zajęcia tylko jeśli na ten konkretny dzień jest JAKIŚ termin w przyszłości
  const hasClassesOnDay = (d: Date) => {
    return schedule.some((cls) => {
      if (cls.day !== d.getDay()) return false;
      const [h, m] = cls.time.split("–")[0].split(":").map(Number);
      const classDateTime = new Date(d);
      classDateTime.setHours(h, m, 0, 0);
      return classDateTime >= now; // tylko przyszłość / dziś w przyszłej godzinie
    });
  };

  const goPrevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goNextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <Wrapper>
      <HeaderRow>
        <Title>Kalendarz – sekcja {sectionName}</Title>
        <TodayLabel>
          Dzisiaj: <Strong>{formatDateLabel(now)}</Strong>
        </TodayLabel>
      </HeaderRow>

      <CalendarWrapper>
        <MonthBox>
          <MonthHeader>
            <MonthTitle>
              {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
            </MonthTitle>
            <NavButtons>
              <IconButton onClick={goPrevMonth} aria-label="Poprzedni miesiąc">
                ‹
              </IconButton>
              <IconButton onClick={goNextMonth} aria-label="Następny miesiąc">
                ›
              </IconButton>
            </NavButtons>
          </MonthHeader>

          <WeekDaysRow>
            {dayNamesShort.map((d) => (
              <WeekDay key={d}>{d}</WeekDay>
            ))}
          </WeekDaysRow>

          <DaysGrid>
            {monthDays.map((d, idx) => {
              const inCurrentMonth = d.getMonth() === viewDate.getMonth();
              const isTodayFlag = isSameDay(d, now);
              const isSelected = selectedDate && isSameDay(d, selectedDate);
              const hasCls = hasClassesOnDay(d);

              return (
                <DayCell
                  key={idx}
                  inCurrentMonth={inCurrentMonth}
                  isToday={isTodayFlag}
                  hasClasses={hasCls}
                  isSelected={!!isSelected}
                  onClick={() => setSelectedDate(d)}
                >
                  <DayNumber>{d.getDate()}</DayNumber>
                  {hasCls && <DayDot isToday={isTodayFlag} />}
                </DayCell>
              );
            })}
          </DaysGrid>
        </MonthBox>

        <SidePanel>
          <SideTitle>
            Najbliższe zajęcia <Small>{`(dla sekcji ${sectionName})`}</Small>
          </SideTitle>

          {upcoming.length === 0 && (
            <NoClassesText>
              Brak zdefiniowanych zajęć w harmonogramie.
            </NoClassesText>
          )}

          {upcoming.map(({ cls, next }, idx) => (
            <NextClassItem key={idx}>
              <NextClassTitle>{cls.title}</NextClassTitle>
              <NextClassMeta>
                {formatDateLabel(next)} • godz. {cls.time}
              </NextClassMeta>
            </NextClassItem>
          ))}

          <SelectedDayBox>
            <SelectedDayTitle>
              {selectedDate
                ? `Zajęcia w dniu ${formatDateLabel(selectedDate)}`
                : "Wybierz dzień w kalendarzu"}
            </SelectedDayTitle>

            {selectedDate && classesForDate.length === 0 && (
              <NoClassesText>
                Brak nadchodzących zajęć w tym dniu.
              </NoClassesText>
            )}

            {selectedDate &&
              classesForDate.map((cls, i) => (
                <SelectedDayItem key={i}>
                  <span>{cls.title}</span>
                  <span>{cls.time}</span>
                </SelectedDayItem>
              ))}
          </SelectedDayBox>
        </SidePanel>
      </CalendarWrapper>
    </Wrapper>
  );
};

export default SectionScheduleCalendar;
