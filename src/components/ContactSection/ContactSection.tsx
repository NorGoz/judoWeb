import emailjs from "emailjs-com";
import styled from "styled-components";
import { useState } from "react";
import React from "react";

const Wrapper = styled.section`
  padding: 60px 20px;
  background: #fafafa;
  text-align: center;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 250px;
`;

const TextArea = styled.textarea`
  margin: 10px;
  padding: 10px;
  width: 250px;
  height: 100px;
`;

const ContactSection = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target as HTMLFormElement,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => setStatus("Wiadomość wysłana!"))
      .catch(() => setStatus("Błąd podczas wysyłania."));
  };

  return (
    <Wrapper>
      <h2>Kontakt</h2>
      <form onSubmit={sendEmail}>
        <Input type="text" name="name" placeholder="Imię" required />
        <Input type="email" name="email" placeholder="E-mail" required />
        <TextArea name="message" placeholder="Wiadomość..." required />
        <button type="submit">Wyślij</button>
      </form>
      {status && <p>{status}</p>}
    </Wrapper>
  );
};

export default ContactSection;
