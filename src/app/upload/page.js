import Image from "next/image";
import log from "../imgs/logo.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full flex-row items-center justify-center">
        <Image src={log} width={150} height={150} alt="logo de la pagina" />
      </div>
     
      <div className="flex  w-full flex-col items-center justify-center p-2">
        <form class="max-w-sm mx-auto items-center justify-center flex-col flex">
          <div class="relative z-0 w-full items-center justify-center  mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-blue-900 appearance-none dark:text-white dark:border-violet-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-violet-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido
            </label>
          </div>
          <div class="mb-5 w-full">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-black-900 dark:text-black"
            >
              Ingresá tu correo
            </label>
            <input
              type="email"
              id="email"
              class="bg-white-50 border border-violet-500 rounded-sm text-black-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ejemplo@gmail.com"
              required
            />
            <label
              for="materias"
              class="block mb-2 mt-5 text-sm rounded-sm font-medium text-black-900 dark:text-black"
            >
              Selecciona la materia
            </label>
            <select
              id="materia"
              class="bg-white-50 border border-violet-500 text-gray-900 focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-violet-500 dark:focus:border-violet  -500"
            >
              <option>Abogacía</option>
              <option>Ciencias Sociales</option>
              <option>Formación Ética</option>
            </select>
          </div>

          <div class="flex flex-col items-center mb-5 justify-center">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              for="user_avatar"
            >
              Subir consignas
            </label>

            <div class="flex flex-col items-center mb-5 justify-center">
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-green-50 dark:text-black-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              ></input>
            </div>
            <div class="flex flex-col items-center mb-5 justify-center">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                for="user_avatar"
              >
                Subir material
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-green-50 dark:text-black-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              ></input>
            </div>
            <div class="flex items-center h-5 flex-col flex">
             
            </div>
            <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >Explica brevemente el resultado esperado
          </label>
          <textarea
            id="comentario"
            rows="8"
            class="block p-2 w-full text-sm text-gray-900 bg-white-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Resultado esperado..."
          ></textarea>
            <label
              for="remember"
              class="flex-row flex m-5 text-sm font-medium text-white-900 dark:text-white-300 items-center justify-center"
            >
              Acepto los Términos y Condiciones  <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 ms-2 border border-white-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-white-700 dark:border-white-600 dark:focus:ring-blue-600 dark:ring-offset-white-800 dark:focus:ring-offset-white-800"
                required
              />
            </label>
          
          <button
            type="submit"
            class="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Enviar
          </button>
            </div>
        </form>
      </div>
      <div className="flex  w-full flex-row items-center justify-center mb-5">
        <Link
          href="/"
          className="group border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-100 hover:dark:border-neutral-100 hover:dark:bg-violet-500/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="inline-block transform translate-x-1.5 transition-transform group-hover:translate-x-0 motion-reduce:transform-none">
              &lt;--
            </span>
            &nbsp; Volver{" "}
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-70`}>
            a la página principal{" "}
          </p>
        </Link>
      </div>
      
    </main>
  );
}
