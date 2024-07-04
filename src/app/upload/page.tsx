"use client";
import Image from "next/image";
import log from "../imgs/logo.png";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";

export default function Page() {
  const [num, setNum] = useState(1);
  const [load, setLoad] = useState(false);
  const [ok, setOk] = useState(false);
  const [completo, setCompleto] = useState(false);

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [emai, setEmai] = useState("");
  const [materia, setMateria] = useState("");
  const [text, setText] = useState("");
  // el state del archivo se declara mas abajo
  const [date, setDate] = useState("");

  useEffect(() => {
    if (ok == true) {
      redirect("/redirect");
    }
  }, [ok]);

  //un archivo
  const [fileOne, setFileOne] = React.useState("");
  const onAddFileOne = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      setFileOne(files[0].name);
    };

    reader.readAsDataURL(files[0]);
  };
  //use effect para handle form
  useEffect(() => {
    if (
      name != "" &&
      surName != "" &&
      emai != "" &&
      materia != "" &&
      text != "" &&
      fileOne != "" &&
      date != ""
    ) {
      setCompleto(true);
      console.log(completo);
      console.log(name, surName, emai, materia, text, fileOne, date);
    }
  }, [name, surName, emai, materia, text, fileOne, date, completo]);

  //dos archivos
  const [fileTwo, setFileTwo] = React.useState("");
  const onAddFileTwo = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 2) {
        setFileTwo["-"];
      } else {
        setFileTwo(files[0].name);
      }
    };
    reader.readAsDataURL(files[0]);
  };
  //tres archivos
  const [fileThree, setFileThree] = React.useState("");
  const onAddFileThree = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 3) {
        setFileThree["-"];
      } else {
        setFileThree(files[0].name);
      }
    };

    reader.readAsDataURL(files[0]);
  };
  //cuatro archivos
  const [fileFour, setFileFour] = React.useState("");
  const onAddFileFour = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 4) {
        setFileFour["-"];
      } else {
        setFileFour(files[0].name);
      }
    };

    reader.readAsDataURL(files[0]);
  };
  //cinco archivos
  const [fileFive, setFileFive] = React.useState("");
  const onAddFileFive = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 5) {
        setFileFive["-"];
      } else {
        setFileFive(files[0].name);
      }
    };

    reader.readAsDataURL(files[0]);
  };
  //seis archivos
  const [fileSix, setFileSix] = React.useState("");
  const onAddFileSix = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 6) {
        setFileSix["-"];
      } else {
        setFileSix(files[0].name);
      }
    };

    reader.readAsDataURL(files[0]);
  };
  //siete archivos
  const [fileSeven, setFileSeven] = React.useState("");
  const onAddFileSeven = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 7) {
        setFileSeven["-"];
      } else {
        setFileSeven(files[0].name);
      }
    };

    reader.readAsDataURL(files[0]);
  };
  //ocho archivos
  const [fileEight, setFileEight] = React.useState("");
  const onAddFileEight = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 8) {
        setFileEight["-"];
      } else {
        setFileEight(files[0].name);
      }
    };

    reader.readAsDataURL(files[0]);
  };
  //nueve archivos
  const [fileNine, setFileNine] = React.useState("");
  const onAddFileNine = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 9) {
        setFileNine["-"];
      } else {
        setFileNine(files[0].name);
      }
    };

    reader.readAsDataURL(files[0]);
  };
  //diez archivos
  const [fileTen, setFileTen] = React.useState("");
  const onAddFileTen = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      if (num < 10) {
        setFileTen["-"];
      } else {
        setFileTen(files[0].name);
      }
    };

    reader.readAsDataURL(files[0]);
  };

  const FormAction = async (formData: FormData) => {
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const email = formData.get("email");
    const materia = formData.get("materia");
    const mensaje = formData.get("mensaje");
    const fecha = formData.get("fecha");

    const datos = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      materia: materia,
      mensaje: mensaje,
      fileOne: fileOne,
      fileTwo: num > 1 ? fileTwo : "-",
      fileThree: num > 2 ? fileThree : "-",
      fileFour: num > 3 ? fileFour : "-",
      fileFive: num > 4 ? fileFive : "-",
      fileSix: num > 5 ? fileSix : "-",
      fileSeven: num > 6 ? fileSeven : "-",
      fileEight: num > 7 ? fileEight : "-",
      fileNine: num > 8 ? fileNine : "-",
      fileTen: num > 9 ? fileTen : "-",
      fecha: fecha,
    };
    const JSONdatos = JSON.stringify(datos);

    const res = await fetch("/api/send", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSONdatos,
    });
    sessionStorage.setItem("datos", JSON.stringify(datos));
    const data = await res.json();
    if (data.message == "Email SENT") {
      setOk(true);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center ">
      <div className="flex  w-full flex-col items-center justify-center p-2">
        <Image src={log} className="logo  mb-0" alt="logo de la pagina" />
        <div
          className="tar"
          style={{
            display: `${completo == true && load == true ? "block" : "none"}`,
          }}
        >
          <Spinner
            label="Subiendo documentos"
            color="secondary"
            labelColor="foreground"
          />
        </div>
        <form
          id="form"
          style={{
            display: `${load == false && ok == false ? "flex" : "none"}`,
          }}
          action={FormAction}
          className="max-w-md tar mx-auto m-5 mt-0 flex flex-col justify-center items-center"
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                placeholder=" "
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Nombre
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="apellido"
                id="apellido"
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setSurName(e.target.value)}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Apellido
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              onChange={(e) => setEmai(e.target.value)}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Correo electrónico
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            {" "}
            <label
              htmlFor="materia"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Seleccioná la materia
            </label>
            <select
              required
              onChange={(e) => setMateria(e.target.value)}
              id="materia"
              name="materia"
              defaultValue="vacio"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value=""></option>
              <option value="Derecho">Derecho</option>
              <option value="Historia">Historia</option>
              <option value="Filosofia">Filosofía</option>
              <option value="Teologia">Teología</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-700">
              Sobre la tarea
            </label>
            <textarea
              id="mensaje"
              onChange={(e) => setText(e.target.value)}
              name="mensaje"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Qué resultado buscás"
              required
            />
          </div>
          <hr className="w-48 h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"></hr>
          <div className="flex flex-col items-center text-center">
            {" "}
            <label
              htmlFor="num"
              className="flex flex-col mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cantidad de archivos a subir:
              <input
                min={1}
                max={10}
                type="number"
                id="num"
                name="num"
                aria-describedby="helper-text-explanation"
                className="bg-blue-50 border border-blue-900 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-center p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1"
                required
                value={num}
                onChange={(e) => setNum(+e.target.value)}
              />
            </label>
          </div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-700">
            Subir material
          </label>
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.5 }}
            key={num}
          >
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileOne"
              id="fileOne"
              name="fileOne"
              type="file"
              accept="application/pdf"
              onChange={onAddFileOne}
              required
            />
            <hr
              style={{ display: `${num >= 2 ? "flex" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileTwo"
              id="fileTwo"
              name="fileTwo"
              style={{ display: `${num >= 2 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileTwo}
            />
            <hr
              style={{ display: `${num >= 2 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>{" "}
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileThree"
              id="fileThree"
              name="fileThree"
              style={{ display: `${num >= 3 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileThree}
            />
            <hr
              style={{ display: `${num >= 3 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileFour"
              id="fileFour"
              name="fileFour"
              style={{ display: `${num >= 4 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileFour}
            />
            <hr
              style={{ display: `${num >= 4 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileFive"
              id="fileFive"
              name="fileFive"
              style={{ display: `${num >= 5 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileFive}
            />
            <hr
              style={{ display: `${num >= 5 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileSix"
              id="fileSix"
              name="fileSix"
              style={{ display: `${num >= 6 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileSix}
            />
            <hr
              style={{ display: `${num >= 6 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileSeven"
              id="fileSeven"
              name="fileSeven"
              style={{ display: `${num >= 7 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileSeven}
            />
            <hr
              style={{ display: `${num >= 7 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileEight"
              id="fileEight"
              name="fileEight"
              style={{ display: `${num >= 8 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileEight}
            />
            <hr
              style={{ display: `${num >= 8 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileNine"
              id="fileNine"
              name="fileNine"
              style={{ display: `${num >= 9 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileNine}
            />
            <hr
              style={{ display: `${num >= 9 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="fileTen"
              id="fileTen"
              name="fileTen"
              style={{ display: `${num >= 10 ? "block" : "none"}` }}
              type="file"
              accept="application/pdf"
              onChange={onAddFileTen}
            />
            <hr
              style={{ display: `${num >= 10 ? "block" : "none"}` }}
              className="w-full h-0.5 mx-1 my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-300"
            ></hr>
          </motion.div>
          <label>Fecha límite de entrega:</label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="date"
            id="fecha"
            name="fecha"
            min="2024-01-01"
            max="2040-12-31"
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          <button
            type="submit"
            style={{ display: `${completo == true ? "block" : "none"}` }}
            onClick={() => setLoad(true)}
            className="text-white hover:shadow-lg hover:shadow-gray-400 shadow-none transition-shadow duration-300 transition-all duration-100 hover:scale-105  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  focus:ring-4 focus:outline-none focus:ring-white-800 dark:focus:ring-white-100 font-medium px-8 py-4   rounded-lg text-2xl text-center "
          >
            <div className="flex flex-row ">
              {" "}
              <p>Enviar</p>{" "}
              <svg
                className="w-6 h-6 mt-1 ms-2 w-full text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>
      <hr
        style={{ display: `${load == false ? "flex" : "none"}` }}
        className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
      ></hr>
      <Link
        href="/"
        className="flex hover:shadow-lg hover:shadow-gray-400 shadow-none transition-shadow duration-100 transition-all duration-100 hover:scale-105 flex-row p-1 mb-5 me-2 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-100 group-hover:to-blue-100 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-100 dark:focus:ring-green-100"
        rel="noopener noreferrer"
        style={{ display: `${load == false ? "flex" : "none"}` }}
      >
        <span className="flex flex-row px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <svg
            className="w-5 h-5   text-gray-800 dark:text-white"
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
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>{" "}
          Volver
        </span>
      </Link>
    </main>
  );
}
