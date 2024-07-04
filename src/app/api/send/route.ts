"use server";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";
import { NextResponse } from "next/server";

const resend = new Resend("re_2L3Qnfod_QJ3y8kiNcrmyPiFV5q7dvqLv");

export async function POST(ar) {
  const arr = await ar.json();
  try {
    const data = await resend.emails.send({
      from: "TP Listo OK <onboarding@resend.dev>",

      to: "tplistook@gmail.com",
      text: "",
      subject: `${arr.materia}`, //aca va la materia, es el asunto del mail
      react: EmailTemplate({
        nombre: arr.nombre,
        apellido: arr.apellido,
        email: arr.email,
        materia: arr.materia,
        mensaje: arr.mensaje,
        fileOne: arr.fileOne,
        fileTwo: arr.fileTwo,
        fileThree: arr.fileThree,
        fileFour: arr.fileFour,
        fileFive: arr.fileFive,
        fileSix: arr.fileSix,
        fileSeven: arr.fileSeven,
        fileEight: arr.fileEight,
        fileNine: arr.fileNine,
        fileTen: arr.fileTen,
        fecha: arr.fecha,
      }),
      attachments: [
        {
          content: arr.fileOne,
          filename:
            "Archivo 1 de " +
            arr.nombre +
            " " +
            arr.apellido +
            ". Sobre " +
            arr.materia +
            " " +
            new Date().toLocaleDateString("es-AR", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            }) +
            " (" +
            arr.fileOne +
            ")" +
            ".pdf",
        },
        arr.fileTwo != ""
          ? {
              content: arr.fileTwo,
              filename:
                "Archivo 2 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileTwo +
                ")" +
                ".pdf",
            }
          : {},
        arr.fileThree != ""
          ? {
              content: arr.fileThree,
              filename:
                "Archivo 3 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileThree +
                ")" +
                ".pdf",
            }
          : {},
        arr.fileFour != ""
          ? {
              content: arr.fileFour,
              filename:
                "Archivo 4 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileFour +
                ")" +
                ".pdf",
            }
          : {},
        arr.fileFive != ""
          ? {
              content: arr.fileFive,
              filename:
                "Archivo 5 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileFive +
                ")" +
                ".pdf",
            }
          : {},
        arr.fileSix != ""
          ? {
              content: arr.fileSix,
              filename:
                "Archivo 6 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileSix +
                ")" +
                ".pdf",
            }
          : {},
        arr.fileSeven != ""
          ? {
              content: arr.fileSeven,
              filename:
                "Archivo 7 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileSeven +
                ")" +
                ".pdf",
            }
          : {},

        arr.fileEight != ""
          ? {
              content: arr.fileEight,
              filename:
                "Archivo 8 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileEight +
                ")" +
                ".pdf",
            }
          : {},
        arr.fileNine != ""
          ? {
              content: arr.fileNine,
              filename:
                "Archivo 9 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileNine +
                ")" +
                ".pdf",
            }
          : {},
        arr.fileTen != ""
          ? {
              content: arr.fileTen,
              filename:
                "Archivo 10 de " +
                arr.nombre +
                " " +
                arr.apellido +
                ". Sobre " +
                arr.materia +
                " " +
                new Date().toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) +
                " (" +
                arr.fileTen +
                ")" +
                ".pdf",
            }
          : {},
      ],
    });

    return NextResponse.json({ message: "Email SENT" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
