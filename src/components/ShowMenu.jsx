function ShowMenu({setIsShowMenu}) {
  return (
    <>
      <a
        onClick={()=> setIsShowMenu(false)}
        className="hover:underline hover:text-blue-500 transition-colors"
        href="#"
      >
        Noticias
      </a>
      <a
        onClick={()=> setIsShowMenu(false)}
        className="hover:underline hover:text-blue-500 transition-colors"
        href="#"
      >
        Autoridades
      </a>
      <a
        onClick={()=> setIsShowMenu(false)}
        className="hover:underline hover:text-blue-500 transition-colors"
        href="#"
      >
        Organos de gobierno
      </a>
      <a
        onClick={()=> setIsShowMenu(false)}
        className="hover:underline hover:text-blue-500 transition-colors"
        href="#"
      >
        WebMail
      </a>
      <a
        onClick={()=> setIsShowMenu(false)}
        className="hover:underline hover:text-blue-500 transition-colors"
        href="#"
      >
        Contactos
      </a>
      <a
        onClick={()=> setIsShowMenu(false)}
        className="hover:underline hover:text-blue-500 transition-colors"
        href="#"
      >
        Elecciones
      </a>
      <a
        onClick={()=> setIsShowMenu(false)}
        className="hover:underline hover:text-blue-500 transition-colors"
        href="#"
      >
        Mapa del sitio
      </a>
    </>
  );
}

export default ShowMenu;
