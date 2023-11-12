import { useState } from "react";

function PrincipalContent() {
  const [isHover, setIsHover] = useState(false);
  return (
    <main className=" max-w-[1200px] mx-auto grid place-items-center md:place-items-start md:grid-cols-[auto_1fr] gap-4 p-4 shadow-xl bg-slate-50">
      <aside className="flex flex-wrap md:max-w-[250px]   gap-4 ">
        <img src="/contacts.jpeg" alt="contacts" />
        <img src="/expo.jpeg" alt="contacts" />

        <div className="w-[250px]">
          <img
            className={isHover ? "hidden" : " block"}
            onMouseLeave={() => setIsHover(false)}
            onMouseEnter={() => setIsHover(true)}
            src="/flayer.jpeg"
            alt=""
          />
          <img
            className={isHover ? "h-auto" : "h-0"}
            src="/flayerBlack.jpeg"
            alt=""
          />
        </div>
      </aside>
      <section>
        <article className="flex flex-wrap  gap-2  ">
          <img src="/uniforyou.jpeg" alt="" />
          <img src="/genre.jpeg" alt="" />
          <img src="/escuela.jpeg" alt="" />
        </article>
      </section>
    </main>
  );
}

export default PrincipalContent;
