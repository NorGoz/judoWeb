import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// --------- ANIMACJE ----------

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

const fadeInOverlay = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeInUp} 0.25s ease-out;

  @media (max-width: 768px) {
    margin: 0px;
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
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

// teraz to jest „karta typu zajęć”
const ActivityCard = styled.div`
  flex: 1 1 320px;
  background: #f4f7fb;
  border-radius: 8px;
  padding: 20px;
  border-left: 6px solid #0a3978;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 900px) {
    flex: 1 1 100%;
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

const ActivityTitle = styled.h3`
  color: #0a3978;
  font-size: 20px;
  margin: 0 0 4px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ActivityMeta = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;

  span.label {
    font-weight: 600;
    color: #0a3978;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const ActivityFooter = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
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

const Select = styled.select`
  border-radius: 6px;
  border: 1px solid #ccd3e0;
  padding: 7px 9px;
  font-size: 14px;
  outline: none;
  background: #fff;

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
// Typy i stałe
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
// Komponent główny – grupowanie po typie zajęć
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

  // wybrany typ zajęć (np. "Akrobatyka – początkująca")
  const [selectedActivityTitle, setSelectedActivityTitle] = useState<
    string | null
  >(null);
  // wszystkie wpisy z grafiku dla danego typu (różne dni)
  const [activityItems, setActivityItems] = useState<IClassItem[]>([]);
  // unikalne godziny dla danego typu
  const [timeOptions, setTimeOptions] = useState<string[]>([]);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);

  const [form, setForm] = useState<IFormState>(INITIAL_FORM);
  const [status, setStatus] = useState<null | {
    type: "success" | "error";
    msg: string;
  }>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔹 grupujemy po tytule zajęć, nie po dniu
  const groupedByTitle = schedule.reduce<Record<string, IClassItem[]>>(
    (acc, item) => {
      if (!acc[item.title]) acc[item.title] = [];
      acc[item.title].push(item);
      return acc;
    },
    {}
  );

  const openModal = (title: string) => {
    const items = groupedByTitle[title] || [];
    if (!items.length) return;

    const uniqueTimes = Array.from(new Set(items.map((i) => i.time)));

    setSelectedActivityTitle(title);
    setActivityItems(items);
    setTimeOptions(uniqueTimes);
    setSelectedTimeIndex(0);

    setForm(INITIAL_FORM);
    setStatus(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isSubmitting) return;
    setIsModalOpen(false);
    setSelectedActivityTitle(null);
    setActivityItems([]);
    setTimeOptions([]);
    setSelectedTimeIndex(0);
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimeIndex(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!selectedActivityTitle || !activityItems.length) return;

    // 🔹 wszystkie dni dla tego typu zajęć (np. [2,4] → Wtorek/Czwartek)
    const uniqueDays = Array.from(new Set(activityItems.map((i) => i.day)));
    const dayLabel = uniqueDays.map((d) => daysMap[d]).join(" / ");

    // 🔹 wybrana godzina z selecta
    const chosenTime =
      timeOptions[selectedTimeIndex] || timeOptions[0] || activityItems[0].time;

    // do "date" bierzemy pierwszy dzień (najwcześniejszy numerowo)
    const firstDay = uniqueDays.sort((a, b) => a - b)[0];

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
      group: selectedActivityTitle, // typ zajęć
      day: dayLabel, // np. "Wtorek / Czwartek"
      time: chosenTime, // wybrana godzina
      date: getNextClassDate(firstDay, chosenTime),
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
        closeModal();
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

  // pomocniczo do wyświetlania w popupie
  const popupDaysLabel = activityItems.length
    ? Array.from(new Set(activityItems.map((i) => daysMap[i.day]))).join(" / ")
    : "";

  return (
    <>
      <Wrapper>
        <Title>Zajęcia – Sekcja {sectionName}</Title>

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
          {Object.entries(groupedByTitle).map(([title, items]) => {
            const days = Array.from(new Set(items.map((i) => i.day)));
            const times = Array.from(new Set(items.map((i) => i.time)));

            const daysLabel = days.map((d) => daysMap[d]).join(" / ");
            const timesLabel = times.length === 1 ? times[0] : times.join(", ");

            return (
              <ActivityCard key={title}>
                <ActivityTitle>{title}</ActivityTitle>
                <ActivityMeta>
                  <span className="label">Dni zajęć:</span> {daysLabel}
                </ActivityMeta>
                <ActivityMeta>
                  <span className="label">
                    {times.length > 1 ? "Godziny:" : "Godzina:"}
                  </span>{" "}
                  {timesLabel}
                </ActivityMeta>
                <ActivityFooter>
                  <Button onClick={() => openModal(title)}>Zapisz się</Button>
                </ActivityFooter>
              </ActivityCard>
            );
          })}
        </DaysWrapper>
      </Wrapper>

      {isModalOpen && selectedActivityTitle && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Zapis na zajęcia</ModalTitle>
              <ModalSubtitle>
                <strong>Sekcja:</strong> {sectionName}
                <br />
                <strong>Grupa:</strong> {selectedActivityTitle}
                <br />
                <strong>Dni:</strong> {popupDaysLabel}
              </ModalSubtitle>
            </ModalHeader>

            <Form onSubmit={handleSubmit}>
              {timeOptions.length > 0 && (
                <Field>
                  <Label>Wybierz godzinę zajęć *</Label>
                  <Select
                    value={selectedTimeIndex}
                    onChange={handleSelectChange}
                  >
                    {timeOptions.map((t, idx) => (
                      <option key={t + idx} value={idx}>
                        {t}
                      </option>
                    ))}
                  </Select>
                </Field>
              )}

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
