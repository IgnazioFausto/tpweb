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
            className="w-32 h-32 mb-4 text-red-600 dark:text-white"
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
              d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className="w-56">
            <h2 className="text-lg ">No se pudo subir los archivos </h2> <br />{" "}
            Inténtalo de nuevo por favor.{" "}
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
          href="/upload"
          className="flex flex-col my-5 mb-8 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-black-100 dark:focus:ring-black-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row items-center">
            <h2 className={` text-lg font-semibold`}>Intentar de nuevo</h2>

            <svg
              className="w-8 h-8 ms-2 text-gray-200 dark:text-white"
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
                d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
              />
            </svg>
          </div>
        </Link>
      </div>
    </main>
  );
}
