import Image from "next/image";
import log from "../imgs/logo.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full mb-0 flex-row items-center justify-center ">
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <Image src={log} width="auto" height="auto" className="logo" alt="logo de la pagina" />
        <div className="flex tar flex-col items-center justify-center">
          <ul className="text-wrap">
            <li className="text-2xl justify-center  items-center max-w-lg p-4">
              <p className="">I. Sube tus archivos PDF.</p>
              <p className="text-base">
                {" "}
                Una vez que ingreses tu nombre y tu apellido, el correo
                electrónico por medio del cual nos comunicaremos y la categoría
                de la tarea. Deberas subir el o los archivos pertinentes a la
                tarea: las consignas a resolver y el texto de donde sacar las
                respuestas y además, una breve descripcion del resultado
                buscado. (En caso de encontrarse consignas y material en el
                mismo archivo, subirlo sólo como consignas).{" "}
              </p>{" "}
              <div className="flex flex-row pt-5 items-center justify-center">
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
                <hr className="w-28 h-1 ms-2 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              </div>
            </li>
            <li className="text-2xl max-w-lg p-4">
              <p className="">II. Recibe nuestra respuesta.</p>
              <p className="text-base">
                {" "}
                En breves momentos nos comunicaremos contigo, a través del
                correo suministrado, informádote precio y tiempo estimado.{" "}
              </p>
              <div className="flex flex-row pt-5 items-center justify-center">
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
                <hr className="w-28 h-1 ms-2 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              </div>
            </li>
            <li className="text-2xl max-w-lg p-4">
              <p>III. Decide.</p>
              <p className="text-base">
                {" "}
                En caso de dar tu conformidad, compliremos en tiempo y forma con
                la tarea asignada.{" "}
              </p>
              <div className="flex flex-row pt-5 items-center justify-center">
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
                <hr className="w-28 h-1 ms-2 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              </div>
            </li>
            <li className="text-2xl max-w-lg p-4">
              <p>IV. Abona y accede a la descarga. </p>
              <p className="text-base">
                {" "}
                ¡No pierdas de vista tu email! Allí te informaremos el metodo de
                pago y la forma para que inmediatamente descargues tu tarea
                realizada integramente.{" "}
              </p>{" "}
              <div className="flex flex-row pt-5 items-center justify-center">
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
                <hr className="w-28 h-1 ms-2 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              </div>
            </li>
          </ul>
        </div>
        
        <Link
          href="/"
          className="flex hover:shadow-lg hover:shadow-gray-400 shadow-none transition-shadow duration-300 transition-all duration-100 hover:scale-105 flex-row p-1 mb-5 me-2 mt-5 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-100 group-hover:to-blue-100 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-100 dark:focus:ring-green-100"
          rel="noopener noreferrer"
        >
          <span className="flex flex-row px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Volver 
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </span>
        </Link>
      </div>
    </main>
  );
}
