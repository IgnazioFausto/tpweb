import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Font,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";
interface EmailTemplateProps {
  nombre: string;
  apellido: string;
  email: string;
  materia: string;
  mensaje: string;
  fileOne: string;
  fileTwo: string;
  fileThree: string;
  fileFour: string;
  fileFive: string;
  fileSix: string;
  fileSeven: string;
  fileEight: string;
  fileNine: string;
  fileTen: string;
  fecha: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  apellido,
  email,
  materia,
  mensaje,
  fileOne,
  fileTwo,
  fileThree,
  fileFour,
  fileFive,
  fileSix,
  fileSeven,
  fileEight,
  fileNine,
  fileTen,
  fecha,
}) => (
  <Html>
    <Head />
    <Font
      fontFamily="Roboto"
      fallbackFontFamily="Verdana"
      webFont={{
        url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
        format: "woff2",
      }}
      fontWeight={400}
      fontStyle="normal"
    />
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans px-2">
        <Container style={container}>
          <Section className="mt-[22px] mx-auto my-auto text-center">
            <Img
              className="my-0 mx-auto"
              src="https://t3.ftcdn.net/jpg/05/71/87/70/240_F_571877099_ynRHOoute2hb6egju9DQH7fHH61XqNtl.jpg"
              alt="study"
              width="300"
              height="100"
            />
          </Section>
          <Text className="text-black text-[25px] mx-10 leading-[24px]">
            <strong>Doctor Fernández</strong>, espero usted pueda ayudarme.
          </Text>
          <Section className="mt-[22px]">
            <Img
              src="https://linkedinheaders.com/wp-content/uploads/2018/02/laptop-working-header.jpg"
              alt="study"
              width="500"
              height="150"
            />
          </Section>
          <Text className="text-black text-[18px] font-normal  p-0 my-[30px] mx-10">
            Hola, mi nombre es{" "}
            <strong>
              {" "}
              {nombre} {apellido}
            </strong>
            , y necesito ayuda con la materia de <strong>{materia}</strong>
          </Text>
          <Text className="text-black text-[14px] mx-10 leading-[24px]">
            {mensaje}
          </Text>
          <Text className="text-black text-[14px] mx-10 leading-[24px]">
            La fecha límite para entregar mi tarea es: <strong>{fecha}</strong>
          </Text>

          <Section className="text-center mt-[32px] mb-[32px]">
            <Button
              className="bg-[#000000] rounded text-white text-[12px] font-bold no-underline text-center px-5 py-3"
              href={`mailto:${email}?subject=Respuesta de TP LISTO OK&body=¡Hola ${nombre} ${apellido}! Hemos recibido tu tarea y estimamos que podemos entregartela terminada en la fecha de ${fecha} o antes. Por favor, no pierdas de vista tu correo electrónico, por allí nos comunicaremos`}
            >
              Confirmar
            </Button>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "7px 11px 18px -1px rgba(0,0,0,0.59)",
  marginTop: "5px",
  maxWidth: "425px",
  margin: "0 auto",
};
