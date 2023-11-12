import { IconAppsFilled, IconSearch } from "@tabler/icons-react";
import ShowMenu from "./ShowMenu";
import { useState } from "react";

function NavBar() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <nav>
      <section className="fixed right-0 left-0 bg-slate-700 text-white flex  gap-3 justify-between p-2 items-center px-10">
        <div className="hidden md:flex-row gap-5 md:flex text-center ">
          <ShowMenu />
        </div>
        <button
          onClick={() => setIsShowMenu(true)}
          className="flex gap-2 md:hidden hover:text-yellow-400 "
        >
          <IconAppsFilled />
          <h3>Menu</h3>
        </button>
        <div>
          <form className="bg-white text-black rounded-full px-4 overflow-hidden flex items-center p-2 ">
            <input type="text" className=" outline-none " />
            <IconSearch />
          </form>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center bg-slate-300 p-4 pt-20">
        <img className="max-w-[100px]" src="/logo.png" alt="" />
        <h1 className="uppercase text-2xl max-w-md text-center">
          Universidad Nacional de la patagonia San Juan Bosco
        </h1>
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

      {/* MENU PHONE */}

      <div
        className={`fixed top-0 bottom-0 right-0 left-0 bg-black/70 transition-all duration-300 ${
          isShowMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } `}
      >
        <div className="grid text-xl place-items-center h-screen text-white p-4">
          <ShowMenu setIsShowMenu={setIsShowMenu} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
