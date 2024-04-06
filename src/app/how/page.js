import Image from "next/image";
import log from "../imgs/logo.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-center ">
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <Image src={log} width={150} height={150} alt="logo de la pagina" />
        <div className="flex p-0 flex-col items-center justify-center">
          <ul className="list-[upper-roman] text-wrap">
            <li className="text-2xl max-w-xs p-4">
              Sube tus archivos. <hr></hr>{" "}
              <p className="text-base">
                {" "}
                Una vez que ingreses tu nombre y tu apellido, el correo electrónico por medio del cual nos comunicaremos y la categoría de la tarea. Deberas subir el o los archivos pertinentes a la tarea: las
                consignas a resolver y el texto de donde sacar las respuestas y además,
                una breve descripcion del resultado buscado. (En caso de encontrarse consignas y material en el mismo archivo, subirlo sólo como consignas).{" "}
              </p>{" "}
            </li>
            <li className="text-2xl max-w-xs p-4">
              Recibe nuestra respuesta. <hr></hr>{" "}
              <p className="text-base">
                {" "}
                En breves momentos nos comunicaremos contigo, a través del correo suministrado, informádote precio y tiempo estimado.{" "}
              </p>{" "}
            </li>
            <li className="text-2xl max-w-xs p-4">
              Decide. <hr></hr>{" "}
              <p className="text-base">
                {" "}
                En caso de dar tu conformidad, compliremos en tiempo y forma con la tarea asignada.{" "}
              </p>{" "}
            </li>
            <li className="text-2xl max-w-xs p-4">
              Abona y accede a la descarga. <hr></hr>{" "}
              <p className="text-base">
                {" "}
                ¡No pierdas de vista tu email! Allí te informaremos el metodo de pago y la forma para que inmediatamente descargues tu tarea realizada integramente.{" "}
              </p>{" "}
            </li>
          </ul>
         
        </div>
        <Link
          href="/"
          className="group border border-transparent px-5 py-4 mb-5 mt-5 transition-colors hover:border-gray-100 hover:bg-gray-100 hover:dark:border-neutral-100 hover:dark:bg-blue-500/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Volver{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              --&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-70`}>
            a la página principal{" "}
          </p>
        </Link>
      </div>
    </main>
  );
}
