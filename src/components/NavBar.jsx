import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

function NavBar() {

  const [isShowMenu, setIsShowMenu] = useState(false)
  return (
    <nav>
      <section className="bg-slate-700 text-white flex flex-col md:flex-row gap-3 justify-between p-2 items-center">
        <div className="flex flex-col md:flex-row gap-5 text-center ">
          <a
            className="hover:underline hover:text-blue-500 transition-colors"
            href="#"
          >
            Noticias
          </a>
          <a
            className="hover:underline hover:text-blue-500 transition-colors"
            href="#"
          >
            Autoridades
          </a>
          <a
            className="hover:underline hover:text-blue-500 transition-colors"
            href="#"
          >
            Organos de gobierno
          </a>
          <a
            className="hover:underline hover:text-blue-500 transition-colors"
            href="#"
          >
            WebMail
          </a>
          <a
            className="hover:underline hover:text-blue-500 transition-colors"
            href="#"
          >
            Contactos
          </a>
          <a
            className="hover:underline hover:text-blue-500 transition-colors"
            href="#"
          >
            Elecciones
          </a>
          <a
            className="hover:underline hover:text-blue-500 transition-colors"
            href="#"
          >
            Mapa del sitio
          </a>
        </div>
        <div>
          <form className="bg-white text-black rounded-full px-4 overflow-hidden flex items-center p-2 ">
            <input type="text" className=" outline-none " />
            <IconSearch />
          </form>
        </div>
      </section>
      <section  className="flex flex-col md:flex-row items-center justify-center bg-slate-300 p-4">
        <img className="max-w-[100px]" src="/logo.png" alt="" />
        <h1 className="uppercase text-2xl max-w-md text-center">Universidad Nacional de la patagonia San Juan Bosco</h1>
      </section>
      
      <section className="uppercase flex justify-around p-5 bg-slate-400 text-white shadow-md ">
        <a href="#">Estudiantes</a>
        <a href="#">Investigación</a>
        <a href="#">Académica</a>
        <a href="#">Extensión</a>
        <a href="#">Bienestar</a>
        <a href="#">Secretarías</a>
        <a href="#">Sedes</a>
        <a href="#">Facultades</a>
      </section>

      
    </nav>
  );
}

export default NavBar;
