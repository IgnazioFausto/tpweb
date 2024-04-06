import Image from "next/image";
import log from "../app/imgs/logo.png";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-2">
      <div className="mb-8 grid text-center items-center">
        <Image src={log} width={180} height={180} alt="logo de la pagina" />
      </div>

      <div className="mb-32 grid text-center items-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center">
        <Link
          href="/how"
          className="group  border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-100 hover:dark:border-neutral-100 hover:dark:bg-violet-600/30"
          
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="inline-block transform translate-x-1.5 transition-transform group-hover:translate-x-0 motion-reduce:transform-none">
              &lt;---  
            </span> 
            &nbsp; Cómo funciona{" "}
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-70`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        <Link
          href="/upload"
          className="group  border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-100 hover:dark:border-neutral-100 hover:dark:bg-green-500/30"
          
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Subir tarea{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             ---&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-70`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </Link>
      </div>
    </main>
  );
}
