import Image from "next/image";
import log from "../app/imgs/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="mb-8 grid text-center items-center">
        <Image
          src={log}
          width="auto"
          height="auto"
          className="logo"
          alt="logo de la pagina"
        />
      </div>

      <div className=" flex flex-col  text-center items-center lg:max-w-5xl lg:mb-0 lg:grid-cols-3 lg:text-center">
        <Link
          href="/how"
          className="flex hover:shadow-lg hover:shadow-gray-400 shadow-none transition-shadow duration-300 transition-all duration-100 hover:scale-105 flex-col text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-black-100 dark:focus:ring-black-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row items-center ">
            <h2 className={`text-2xl font-semibold`}>Cómo funciona</h2>
            <svg
              className="w-12 h-12 text-gray-200 dark:text-white"
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
                d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              pasos a seguir
            </p>
          </div>
        </Link>
        <Link
          href="/upload"
          className="flex hover:shadow-lg hover:shadow-gray-400 shadow-none transition-shadow duration-300 transition-all duration-100 hover:scale-105 flex-col text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-black-100 dark:focus:ring-black-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row items-center">
            <h2 className={` text-2xl font-semibold`}> Subir tarea</h2>
            <svg
              className="w-12 h-12 text-gray-200 dark:text-white"
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
                d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              adjunta tus archivos
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
