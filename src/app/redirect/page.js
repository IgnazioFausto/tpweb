"use client";
import Image from "next/image";
import log from "../imgs/logo.png";
import Link from "next/link";

export default function Page() {
  let data = JSON.parse(sessionStorage.getItem("datos"));
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-center ">
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <Image
          src={log}
          width="auto"
          height="auto"
          className="logo"
          alt="logo de la pagina"
        />

        <div className="flex tar p-1  flex-col items-center justify-center">
          <svg
            className="w-32 h-32 text-green-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
            />
          </svg>
          <div className="w-56">
            ¡Listo{" "}
            <h2 className="text-lg  group relative w-max">
              {" "}
              {data.nombre}
              <span className="py-1 absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
              !
            </h2>{" "}
            <br /> Nos comunicaremos con vos a través del correo electrónico que
            nos facilitaste{" "}
            <span className="py-1 bg-gray-100">{data.email}</span> para
            informarte si contamos con la disponibilidad para realizar tu tarea
            y los pasos a seguir.{" "}
            <span className="py-1 bg-gray-100">
              En este momento evaluamos los documentos que adjuntaste,
              considerando la fecha limite de entrega que has indicado:{" "}
              {data.fecha.slice(5, 10)}
            </span>{" "}
            <hr className="w-28 h-1 ms-2 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />

            <h2 className="text-lg  group relative w-max">
              {" "}
              <span className="py-1 absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
              ¡Pendiente de tu correo
               <hr></hr>
              {data.nombre}!
            </h2>{" "}
          </div>{" "}
          <div className="flex flex-row pt-1 items-center justify-center">
            <hr className="w-28 h-1 me-2 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="bg-transparent dark:bg-transparent">
              <svg
                className="w-4 h-4 text-gray-700 dark:text-black-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
            </div>
            <hr className="w-28 h-1 ms-2 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          </div>
        </div>
        <Link
          href="/"
          className="flex flex-col my-5 mb-8 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-black-100 dark:focus:ring-black-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row items-center">
            <h2 className={` text-lg font-semibold`}>Nueva tarea</h2>
            <svg
              className="w-8 h-8 m-1 text-gray-100 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </main>
  );
}
