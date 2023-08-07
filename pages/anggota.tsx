import React, { useEffect, useState } from "react";
import CardList from "../components/anggota/card-list";
import getMembers from "../lib/strapi/members";

export default function Anggota() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then((res) => {
      console.log(res);
      setMembers(res);
    });
  }, []);

  return (
    <>
      <div className={"px-8 lg:px-28 pt-[80px]"}>
        <div className="flex pt-9 items-center justify-center mb-9 font-poppins">
          <h1 className={" sm:text-4xl lg:text-5xl font-semibold text-base"}>
            Struktur Organisasi
          </h1>
        </div>
        <div className="py-14 px-4 lg:px-14 mb-14 flex items-center justify-center bg-base rounded-[100px] ">
          <img src={"/static/struktur.png"} className={""} />
        </div>
        <div className={"lg:px-28 mb-14"}>
          <h1>Member Directory</h1>
          <CardList members={members} />
        </div>
      </div>
    </>
  );
}
