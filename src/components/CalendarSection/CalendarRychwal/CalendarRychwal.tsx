// import React, { useState } from "react";
// import styled from "styled-components";

// const Wrapper = styled.section`
//   background: #ffffff;
//   padding: 40px 20px;
//   border-radius: 8px;
//   box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
//   margin: 40px auto;
//   max-width: 900px;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const Title = styled.h2`
//   text-align: center;
//   color: #0a3978;
//   font-size: 28px;
//   margin-bottom: 10px;
// `;

// const Info = styled.div`
//   text-align: center;
//   font-size: 16px;
//   color: #333;

//   a {
//     color: #0a3978;
//     text-decoration: none;
//     font-weight: 500;
//   }
// `;

// const DaysWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const DayCard = styled.div`
//   flex: 1 1 400px;
//   background: #f4f7fb;
//   border-radius: 8px;
//   padding: 20px;
//   border-left: 6px solid #0a3978;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   min-width: 500px;

//   @media (max-width: 600px) {
//     min-width: 0;
//   }
// `;

// const DayTitle = styled.h3`
//   color: #0a3978;
//   font-size: 20px;
//   margin-bottom: 8px;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//   padding-bottom: 5px;
// `;

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const Item = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #fff;
//   border-radius: 6px;
//   padding: 8px 12px;
//   margin-bottom: 6px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
// `;

// const Time = styled.span`
//   color: #555;
//   font-weight: 500;
// `;

// const Button = styled.button`
//   background: #0a3978;
//   color: white;
//   border: none;
//   padding: 6px 12px;
//   border-radius: 6px;
//   font-size: 14px;
//   cursor: pointer;
//   transition: background 0.2s;

//   &:hover {
//     background: #0c4ea5;
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: default;
//   }
// `;

// // ---------- POPUP / MODAL ----------

// const ModalOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.45);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 50;
// `;

// const ModalContent = styled.div`
//   background: #ffffff;
//   border-radius: 10px;
//   max-width: 520px;
//   width: 100%;
//   padding: 24px 20px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
// `;

// const ModalHeader = styled.div`
//   margin-bottom: 16px;
// `;

// const ModalTitle = styled.h3`
//   margin: 0 0 4px;
//   color: #0a3978;
//   font-size: 20px;
// `;

// const ModalSubtitle = styled.p`
//   margin: 0;
//   font-size: 14px;
//   color: #555;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const Field = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   color: #333;
//   font-weight: 500;
// `;

// const Input = styled.input`
//   border-radius: 6px;
//   border: 1px solid #ccd3e0;
//   padding: 7px 9px;
//   font-size: 14px;
//   outline: none;

//   &:focus {
//     border-color: #0a3978;
//     box-shadow: 0 0 0 1px rgba(10, 57, 120, 0.2);
//   }
// `;

// const TextArea = styled.textarea`
//   border-radius: 6px;
//   border: 1px solid #ccd3e0;
//   padding: 7px 9px;
//   font-size: 14px;
//   outline: none;
//   resize: vertical;
//   min-height: 60px;

//   &:focus {
//     border-color: #0a3978;
//     box-shadow: 0 0 0 1px rgba(10, 57, 120, 0.2);
//   }
// `;

// const CheckboxRow = styled.label`
//   display: flex;
//   align-items: flex-start;
//   gap: 8px;
//   font-size: 12px;
//   color: #555;
// `;

// const Checkbox = styled.input`
//   margin-top: 2px;
// `;

// const ModalFooter = styled.div`
//   margin-top: 12px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   justify-content: flex-end;
// `;

// const SecondaryButton = styled(Button)`
//   background: #f2f4f8;
//   color: #0a3978;

//   &:hover {
//     background: #e2e7f0;
//   }
// `;

// const StatusMessage = styled.p<{ type: "success" | "error" }>`
//   margin: 6px 0 0;
//   font-size: 13px;
//   color: ${({ type }) => (type === "success" ? "#1f8b4c" : "#c62828")};
// `;

// const SmallInfo = styled.p`
//   font-size: 11px;
//   color: #777;
//   margin-top: 4px;
// `;

// // --------------------------------------
// // Dane: powtarzalny harmonogram zajęć
// // --------------------------------------

// interface IClassItem {
//   title: string;
//   time: string;
//   day: number; // 0 - niedziela, 1 - poniedziałek, ... 6 - sobota
// }

// const schedule: IClassItem[] = [
//   { title: "Gimnastyka sportowa 4–5 lat", time: "16:00–16:45", day: 1 },
//   { title: "Gimnastyka sportowa 6–7 lat", time: "16:45–17:30", day: 1 },
//   { title: "Judo – grupa młodsza (8–12 lat)", time: "17:30–18:45", day: 1 },
//   { title: "Gimnastyka sportowa 4–5 lat", time: "16:00–16:45", day: 3 },
//   { title: "Gimnastyka sportowa 6–7 lat", time: "16:45–17:30", day: 3 },
//   { title: "Judo – grupa młodsza (8–12 lat)", time: "17:30–18:45", day: 3 },
//   { title: "Akrobatyka – początkująca", time: "15:30–16:30", day: 5 },
//   { title: "Akrobatyka – początkująca", time: "16:30–17:30", day: 5 },
//   { title: "Akrobatyka – średniozaawansowana", time: "17:30–18:30", day: 5 },
//   { title: "Akrobatyka – średniozaawansowana", time: "18:30–19:30", day: 5 },
//   { title: "Akrobatyka – średniozaawansowana", time: "19:30–20:30", day: 5 },
// ];

// // Funkcja tworząca link Google Calendar dla powtarzalnego wydarzenia
// const createGoogleCalendarLink = (title: string, time: string, day: number) => {
//   const now = new Date();
//   const diff = (day + 7 - now.getDay()) % 7;
//   const eventDate = new Date(now);
//   eventDate.setDate(now.getDate() + diff);

//   const [startH, startM] = time.split("–")[0].split(":").map(Number);
//   const [endH, endM] = time.split("–")[1].split(":").map(Number);

//   const start = new Date(eventDate.setHours(startH, startM, 0, 0));
//   const end = new Date(eventDate.setHours(endH, endM, 0, 0));

//   const startISO = start.toISOString().replace(/[-:]|\.\d+/g, "");
//   const endISO = end.toISOString().replace(/[-:]|\.\d+/g, "");

//   const details = "Zajęcia organizowane przez Akademię Sportu, sekcja Rychwał.";
//   const location = "Hala sportowa w Rychwale, ul. Sportowa 34";

//   return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
//     title
//   )}&dates=${startISO}/${endISO}&details=${encodeURIComponent(
//     details
//   )}&location=${encodeURIComponent(location)}&recur=RRULE:FREQ=WEEKLY`;
// };

// const daysMap: Record<number, string> = {
//   1: "Poniedziałek",
//   2: "Wtorek",
//   3: "Środa",
//   4: "Czwartek",
//   5: "Piątek",
//   6: "Sobota",
//   0: "Niedziela",
// };

// // URL do Apps Script – możesz przenieść do .env
// const SIGNUP_ENDPOINT =
//   import.meta.env.VITE_SIGNUP_ENDPOINT ??
//   "https://script.google.com/macros/s/AKfycby8yKZNxZ0Y5SqReBCNB-QIXCdxHhYx-LjgkwdkYmbesbuxj0OsjdqILud2sfaHPi_KjA/exec";

// interface IFormState {
//   parentName: string;
//   childName: string;
//   childYear: string;
//   phone: string;
//   email: string;
//   notes: string;
//   rodo: boolean;
// }

// // --------------------------------------
// // Komponent główny
// // --------------------------------------

// export const CalendarSectionRychwal: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedClass, setSelectedClass] = useState<IClassItem | null>(null);
//   const [form, setForm] = useState<IFormState>({
//     parentName: "",
//     childName: "",
//     childYear: "",
//     phone: "",
//     email: "",
//     notes: "",
//     rodo: false,
//   });
//   const [status, setStatus] = useState<null | {
//     type: "success" | "error";
//     msg: string;
//   }>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Grupuj zajęcia po dniu
//   const grouped = schedule.reduce<Record<number, IClassItem[]>>((acc, item) => {
//     acc[item.day] = acc[item.day] ? [...acc[item.day], item] : [item];
//     return acc;
//   }, {});

//   const openModal = (cls: IClassItem) => {
//     setSelectedClass(cls);
//     setForm({
//       parentName: "",
//       childName: "",
//       childYear: "",
//       phone: "",
//       email: "",
//       notes: "",
//       rodo: false,
//     });
//     setStatus(null);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     if (isSubmitting) return;
//     setIsModalOpen(false);
//     setSelectedClass(null);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type, checked } = e.target as any;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus(null);

//     if (!selectedClass) return;

//     if (!form.rodo) {
//       setStatus({
//         type: "error",
//         msg: "Zaznacz zgodę na przetwarzanie danych, aby wysłać zgłoszenie.",
//       });
//       return;
//     }

//     if (
//       !form.parentName ||
//       !form.childName ||
//       !form.childYear ||
//       !form.phone ||
//       !form.email
//     ) {
//       setStatus({
//         type: "error",
//         msg: "Uzupełnij wszystkie wymagane pola oznaczone gwiazdką.",
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     const payload = {
//       section: "Rychwał",
//       group: selectedClass.title,
//       day: daysMap[selectedClass.day],
//       time: selectedClass.time,
//       parentName: form.parentName,
//       childName: form.childName,
//       childYear: form.childYear,
//       phone: form.phone,
//       email: form.email,
//       notes: form.notes,
//     };

//     try {
//       const res = await fetch(SIGNUP_ENDPOINT, {
//         method: "POST",
//         // text/plain żeby uprościć CORS, w body dalej leci JSON-string
//         headers: { "Content-Type": "text/plain;charset=utf-8" },
//         body: JSON.stringify(payload),
//       });

//       // nawet jeśli nie czytamy JSON-a, sprawdzimy tylko status HTTP
//       if (!res.ok) {
//         throw new Error("Serwer zwrócił błąd (" + res.status + ")");
//       }

//       setStatus({
//         type: "success",
//         msg: "Dziękujemy! Zgłoszenie zostało wysłane. Trener skontaktuje się w celu potwierdzenia.",
//       });
//       // opcjonalnie: closeModal() po kilku sekundach
//     } catch (err: any) {
//       console.error(err);
//       setStatus({
//         type: "error",
//         msg: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Wrapper>
//         <Title>Kalendarz zajęć – Sekcja Rychwał</Title>

//         <Info>
//           <p>
//             <strong>Miejsce:</strong> Hala sportowa w Rychwale, ul. Sportowa 34
//           </p>
//           <p>
//             <strong>Kontakt:</strong> Michał Gaj |{" "}
//             <a href="tel:782560182">782 560 182</a> |{" "}
//             <a href="mailto:michalg87@op.pl">michalg87@op.pl</a>
//           </p>
//         </Info>

//         <DaysWrapper>
//           {Object.entries(grouped).map(([dayKey, activities]) => (
//             <DayCard key={dayKey}>
//               <DayTitle>{daysMap[Number(dayKey)]}</DayTitle>
//               <List>
//                 {activities.map((act, i) => (
//                   <Item key={i}>
//                     <strong>{act.title}</strong>
//                     <div
//                       style={{
//                         display: "flex",
//                         gap: "8px",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Time>{act.time}</Time>
//                       <Button onClick={() => openModal(act)}>Zapisz się</Button>
//                     </div>
//                   </Item>
//                 ))}
//               </List>
//             </DayCard>
//           ))}
//         </DaysWrapper>
//       </Wrapper>

//       {isModalOpen && selectedClass && (
//         <ModalOverlay onClick={closeModal}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <ModalHeader>
//               <ModalTitle>Zapis na zajęcia</ModalTitle>
//               <ModalSubtitle>
//                 <strong>Sekcja:</strong> Rychwał
//                 <br />
//                 <strong>Grupa:</strong> {selectedClass.title}
//                 <br />
//                 <strong>Dzień:</strong> {daysMap[selectedClass.day]}{" "}
//                 <strong>Godz.</strong> {selectedClass.time}
//               </ModalSubtitle>
//             </ModalHeader>

//             <Form onSubmit={handleSubmit}>
//               <Field>
//                 <Label>Imię i nazwisko rodzica / opiekuna *</Label>
//                 <Input
//                   name="parentName"
//                   value={form.parentName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Field>

//               <Field>
//                 <Label>Imię i nazwisko dziecka *</Label>
//                 <Input
//                   name="childName"
//                   value={form.childName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Field>

//               <Field>
//                 <Label>Rok urodzenia dziecka *</Label>
//                 <Input
//                   name="childYear"
//                   value={form.childYear}
//                   onChange={handleChange}
//                   placeholder="np. 2020"
//                   required
//                 />
//               </Field>

//               <Field>
//                 <Label>Telefon kontaktowy *</Label>
//                 <Input
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </Field>

//               <Field>
//                 <Label>Adres e-mail rodzica *</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Field>

//               <Field>
//                 <Label>Dodatkowe informacje (opcjonalnie)</Label>
//                 <TextArea
//                   name="notes"
//                   value={form.notes}
//                   onChange={handleChange}
//                   placeholder="Np. wcześniejsze doświadczenie, uwagi zdrowotne itp."
//                 />
//               </Field>

//               <CheckboxRow>
//                 <Checkbox
//                   type="checkbox"
//                   name="rodo"
//                   checked={form.rodo}
//                   onChange={handleChange}
//                 />
//                 <span>
//                   Wyrażam zgodę na przetwarzanie danych osobowych w celu zapisu
//                   na zajęcia zgodnie z obowiązującymi przepisami RODO.
//                 </span>
//               </CheckboxRow>

//               {status && (
//                 <StatusMessage type={status.type}>{status.msg}</StatusMessage>
//               )}

//               <SmallInfo>
//                 Po wysłaniu formularza trener skontaktuje się w celu
//                 potwierdzenia miejsca w grupie.
//               </SmallInfo>

//               <ModalFooter>
//                 {/* Opcjonalnie: po sukcesie możesz dodać tu przycisk "Dodaj do kalendarza" */}
//                 <SecondaryButton
//                   type="button"
//                   onClick={closeModal}
//                   disabled={isSubmitting}
//                 >
//                   Zamknij
//                 </SecondaryButton>
//                 <Button type="submit" disabled={isSubmitting}>
//                   {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
//                 </Button>
//               </ModalFooter>
//             </Form>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </>
//   );
// };

// export default CalendarSectionRychwal;

import React from "react";
import CalendarSection, { type IClassItem } from "../CalendarSection";

export const rychwalSchedule: IClassItem[] = [
  // poniedziałek (1)
  { title: "Gimnastyka sportowa 4–5 lat", time: "16:00–16:45", day: 1 },
  { title: "Gimnastyka sportowa 6–7 lat", time: "16:45–17:30", day: 1 },
  { title: "Judo – grupa młodsza (8–12 lat)", time: "17:30–18:45", day: 1 },

  // piątek (5) – Akrobatyka
  { title: "Akrobatyka – początkująca", time: "15:30–16:30", day: 5 },
  { title: "Akrobatyka – początkująca", time: "16:30–17:30", day: 5 },
  { title: "Akrobatyka – średniozaawansowana", time: "17:30–18:30", day: 5 },
  { title: "Akrobatyka – średniozaawansowana", time: "18:30–19:30", day: 5 },
  { title: "Akrobatyka – średniozaawansowana", time: "19:30–20:30", day: 5 },
];
export const CalendarRychwal = () => (
  <CalendarSection
    sectionName="Rychwał"
    location="Hala sportowa w Rychwale ul. Sportowa 34"
    contactName="Michał Gaj"
    phone="782 560 182"
    email="michalg87@op.pl"
    schedule={rychwalSchedule}
  />
);
