import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// --------- ANIMACJE ----------

// miękkie wejście całej sekcji (przy zmianie strony / route'a)
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// overlay modala
const fadeInOverlay = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// pojawianie się okienka modala
const scaleInModal = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// --------- STYLED ----------

const Wrapper = styled.section`
  background: #ffffff;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* 🔹 animacja wejścia sekcji (działa przy każdym wejściu na stronę) */
  animation: ${fadeInUp} 0.25s ease-out;

  @media (max-width: 768px) {
    margin: 24px auto;
    padding: 24px 16px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #0a3978;
  font-size: 28px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Info = styled.div`
  text-align: center;
  font-size: 16px;
  color: #333;

  a {
    color: #0a3978;
    text-decoration: none;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DaysWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const DayCard = styled.div`
  flex: 1 1 400px;
  background: #f4f7fb;
  border-radius: 8px;
  padding: 20px;
  border-left: 6px solid #0a3978;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 500px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 900px) {
    flex: 1 1 100%;
    min-width: 0;
  }

  @media (max-width: 768px) {
    padding: 16px 14px;
    border-radius: 10px;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(0, 74, 173, 0.15);
    }
  }
`;

const DayTitle = styled.h3`
  color: #0a3978;
  font-size: 20px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 6px;
  padding: 8px 12px;
  margin-bottom: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  transition: background 0.15s ease, transform 0.15s ease;

  @media (max-width: 768px) {
    padding: 8px 10px;
  }

  @media (hover: hover) {
    &:hover {
      background: #f1f5ff;
      transform: translateY(-1px);
    }
  }
`;

const Time = styled.span`
  color: #555;
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Button = styled.button`
  background: #0a3978;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    background: #0c4ea5;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 3px 8px rgba(0, 74, 173, 0.3);
    }
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
  }
`;

// ---------- POPUP / MODAL ----------

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  animation: ${fadeInOverlay} 0.2s ease-out;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 10px;
  max-width: 520px;
  width: 100%;
  padding: 24px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);

  animation: ${scaleInModal} 0.2s ease-out;

  @media (max-width: 600px) {
    margin: 0 12px;
    padding: 20px 16px;
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 16px;
`;

const ModalTitle = styled.h3`
  margin: 0 0 4px;
  color: #0a3978;
  font-size: 20px;
`;

const ModalSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  border-radius: 6px;
  border: 1px solid #ccd3e0;
  padding: 7px 9px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #0a3978;
    box-shadow: 0 0 0 1px rgba(10, 57, 120, 0.2);
  }
`;

const TextArea = styled.textarea`
  border-radius: 6px;
  border: 1px solid #ccd3e0;
  padding: 7px 9px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 60px;

  &:focus {
    border-color: #0a3978;
    box-shadow: 0 0 0 1px rgba(10, 57, 120, 0.2);
  }
`;

const CheckboxRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  color: #555;
`;

const Checkbox = styled.input`
  margin-top: 2px;
`;

const ModalFooter = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
`;

const SecondaryButton = styled(Button)`
  background: #f2f4f8;
  color: #0a3978;
  box-shadow: none;

  &:hover {
    background: #e2e7f0;
    box-shadow: none;
  }
`;

const StatusMessage = styled.p<{ type: "success" | "error" }>`
  margin: 6px 0 0;
  font-size: 13px;
  color: ${({ type }) => (type === "success" ? "#1f8b4c" : "#c62828")};
`;

const SmallInfo = styled.p`
  font-size: 11px;
  color: #777;
  margin-top: 4px;
`;

// --------------------------------------
// Typy i stałe (jak u Ciebie)
// --------------------------------------

export interface IClassItem {
  title: string;
  time: string;
  day: number; // 0 - niedziela, 1 - poniedziałek, ... 6 - sobota
}

export interface CalendarSectionProps {
  sectionName: string;
  location: string;
  contactName: string;
  phone: string;
  email: string;
  schedule: IClassItem[];
}

const daysMap: Record<number, string> = {
  1: "Poniedziałek",
  2: "Wtorek",
  3: "Środa",
  4: "Czwartek",
  5: "Piątek",
  6: "Sobota",
  0: "Niedziela",
};

export const getNextClassDate = (day: number, time: string): string => {
  const [startH, startM] = time.split("–")[0].split(":").map(Number);

  const now = new Date();
  const todayDow = now.getDay();

  let diff = (day + 7 - todayDow) % 7;

  const next = new Date(now);
  next.setDate(now.getDate() + diff);
  next.setHours(startH, startM, 0, 0);

  if (diff === 0 && next <= now) {
    next.setDate(next.getDate() + 7);
  }

  return next.toISOString().slice(0, 10);
};

// URL do Apps Script – bez zmian
const SIGNUP_ENDPOINT =
  import.meta.env.VITE_SIGNUP_ENDPOINT ??
  "https://script.google.com/macros/s/AKfycbwbk2Qxuf_eT0K5uK5Kf0NSRafMW2tvzmr6-Dch-mCO3BhYPsQGpUQpbNpMNOChdbpL/exec";

interface IFormState {
  parentName: string;
  childName: string;
  childYear: string;
  phone: string;
  email: string;
  notes: string;
  rodo: boolean;
}

const INITIAL_FORM: IFormState = {
  parentName: "",
  childName: "",
  childYear: "",
  phone: "",
  email: "",
  notes: "",
  rodo: false,
};

// --------------------------------------
// Komponent główny – logika bez zmian
// --------------------------------------

export const CalendarSection: React.FC<CalendarSectionProps> = ({
  sectionName,
  location,
  contactName,
  phone,
  email,
  schedule,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<IClassItem | null>(null);
  const [form, setForm] = useState<IFormState>(INITIAL_FORM);
  const [status, setStatus] = useState<null | {
    type: "success" | "error";
    msg: string;
  }>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const grouped = schedule.reduce<Record<number, IClassItem[]>>((acc, item) => {
    acc[item.day] = acc[item.day] ? [...acc[item.day], item] : [item];
    return acc;
  }, {});

  const openModal = (cls: IClassItem) => {
    setSelectedClass(cls);
    setForm(INITIAL_FORM);
    setStatus(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isSubmitting) return;
    setIsModalOpen(false);
    setSelectedClass(null);
    setForm(INITIAL_FORM);
    setStatus(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as any;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 9);
      const parts = digitsOnly.match(/.{1,3}/g) || [];
      const formatted = parts.join(" ");

      setForm((prev) => ({
        ...prev,
        phone: formatted,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!selectedClass) return;

    if (!form.rodo) {
      setStatus({
        type: "error",
        msg: "Zaznacz zgodę na przetwarzanie danych, aby wysłać zgłoszenie.",
      });
      return;
    }

    if (
      !form.parentName ||
      !form.childName ||
      !form.childYear ||
      !form.phone ||
      !form.email
    ) {
      setStatus({
        type: "error",
        msg: "Uzupełnij wszystkie wymagane pola oznaczone gwiazdką.",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      section: sectionName,
      group: selectedClass.title,
      day: daysMap[selectedClass.day],
      time: selectedClass.time,
      date: getNextClassDate(selectedClass.day, selectedClass.time),
      parentName: form.parentName,
      childName: form.childName,
      childYear: form.childYear,
      phone: form.phone,
      email: form.email,
      notes: form.notes,
    };
    console.log("Wysyłany ładunek:", payload);

    try {
      const res = await fetch(SIGNUP_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Serwer zwrócił błąd (" + res.status + ")");
      }

      setStatus({
        type: "success",
        msg: "Dziękujemy! Zgłoszenie zostało wysłane. Trener skontaktuje się w celu potwierdzenia.",
      });
      setForm(INITIAL_FORM);

      setTimeout(() => {
        setIsModalOpen(false);
        setSelectedClass(null);
        setStatus(null);
      }, 3500);
    } catch (err: any) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Title>Kalendarz zajęć – Sekcja {sectionName}</Title>

        <Info>
          <p>
            <strong>Miejsce:</strong> {location}
          </p>
          <p>
            <strong>Kontakt:</strong> {contactName} |{" "}
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a> |{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </Info>

        <DaysWrapper>
          {Object.entries(grouped).map(([dayKey, activities]) => (
            <DayCard key={dayKey}>
              <DayTitle>{daysMap[Number(dayKey)]}</DayTitle>
              <List>
                {activities.map((act, i) => (
                  <Item key={i}>
                    <strong>{act.title}</strong>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <Time>{act.time}</Time>
                      <Button onClick={() => openModal(act)}>Zapisz się</Button>
                    </div>
                  </Item>
                ))}
              </List>
            </DayCard>
          ))}
        </DaysWrapper>
      </Wrapper>

      {isModalOpen && selectedClass && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Zapis na zajęcia</ModalTitle>
              <ModalSubtitle>
                <strong>Sekcja:</strong> {sectionName}
                <br />
                <strong>Grupa:</strong> {selectedClass.title}
                <br />
                <strong>Dzień:</strong> {daysMap[selectedClass.day]}{" "}
                <strong>Godz.</strong> {selectedClass.time}
              </ModalSubtitle>
            </ModalHeader>

            <Form onSubmit={handleSubmit}>
              <Field>
                <Label>Imię i nazwisko rodzica / opiekuna *</Label>
                <Input
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Label>Imię i nazwisko dziecka *</Label>
                <Input
                  name="childName"
                  value={form.childName}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Label>Rok urodzenia dziecka *</Label>
                <Input
                  name="childYear"
                  value={form.childYear}
                  onChange={handleChange}
                  placeholder="np. 2018"
                  required
                />
              </Field>

              <Field>
                <Label>Telefon kontaktowy *</Label>
                <Input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="np. 500 600 700"
                  required
                />
              </Field>

              <Field>
                <Label>Adres e-mail rodzica *</Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Label>Dodatkowe informacje (opcjonalnie)</Label>
                <TextArea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Np. wcześniejsze doświadczenie, uwagi zdrowotne itp."
                />
              </Field>

              <CheckboxRow>
                <Checkbox
                  type="checkbox"
                  name="rodo"
                  checked={form.rodo}
                  onChange={handleChange}
                />
                <span>
                  Wyrażam zgodę na przetwarzanie danych osobowych w celu zapisu
                  na zajęcia zgodnie z obowiązującymi przepisami RODO.
                </span>
              </CheckboxRow>

              {status && (
                <StatusMessage type={status.type}>{status.msg}</StatusMessage>
              )}

              <SmallInfo>
                Po wysłaniu formularza trener skontaktuje się w celu
                potwierdzenia miejsca w grupie.
              </SmallInfo>

              <ModalFooter>
                <SecondaryButton
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                >
                  Zamknij
                </SecondaryButton>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                </Button>
              </ModalFooter>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default CalendarSection;
