import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import type { Value } from "react-calendar/dist/shared/types.js";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: #fff;
`;

const CalendarSection = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [bookings, setBookings] = useState<{ [key: string]: string[] }>({});

  // react-calendar's onChange can return Value and event

  const handleDateChange = (
    value: Value,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(value, event);
    if (value instanceof Date) {
      setDate(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      setDate(value[0]);
    } else {
      setDate(null);
    }
  };

  const handleBooking = () => {
    if (!date) return;
    const key = date.toDateString();
    const newBookings = { ...bookings };
    newBookings[key] = [...(newBookings[key] || []), "Nowy zapis"];
    setBookings(newBookings);
    alert(`Zapisano na zajęcia: ${key}`);
  };

  return (
    <Wrapper>
      <h2>Kalendarz zapisów</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <button onClick={handleBooking} disabled={!date}>
        Zapisz się
      </button>
      {date && bookings[date.toDateString()] && (
        <p>
          Zapisani na {date.toDateString()}:{" "}
          {bookings[date.toDateString()].length} os.
        </p>
      )}
    </Wrapper>
  );
};

export default CalendarSection;
