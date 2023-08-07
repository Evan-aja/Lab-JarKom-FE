import Heading from "../components/heading";
import Card from "../components/card";
import CardContainer from "../components/card-container";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Kegiatan } from "../types/models";
import { t } from "../lib/i18n";
import { getListActivity } from "../lib/strapi/activities";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getListActivity().then((data) => {
      setPosts(data.slice(0, 3));
    });
  }, []);

  return (
    <>
      <div className="bg-base/35 text-base pt-[80px] flex lg:h-[745px] -z-20">
        <div className="-left-28  absolute z-0">
          <img src="/static/roundgradient.png" alt={""} />
        </div>
        <div className="z-0 py-20 px-4 md:px-20 lg:w-3/6 lg:px-28 lg:py-28 text-center lg:text-left object-left font-poppins">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-4">
            {t("homepage:title")}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-8">
            {t("homepage:subtitle")}
          </h2>
          <p className="lg:text-lg mb-8 text-grey lg:text-justify">
            {t("homepage:description")}
          </p>
        </div>
        <div className="lg:w-3/6 object-bottom hidden lg:flex pr-20">
          <img className="" src="/static/imghome.svg" alt="" />
        </div>
      </div>

      <div className={"px-4 lg:flex lg:px-28 my-14"}>
        <div className={"lg:w-1/2 flex place-content-center"}>
          <img className={""} src={"/static/profil.png"} alt={"Profile"} />
        </div>

        <div
          className={
            "lg:w-1/2 font-poppins px-8 mt-8 lg:mt-0 flex items-center"
          }
        >
          <div className={"place-content-center"}>
            <Heading
              title={t("homepage:profile")}
              subtitle={""}
              desc={t("homepage:profiledesc")}
            />
          </div>
        </div>
      </div>

      <div
        className={"bg-base lg:w-4/5 rounded-tr-[200px] lg:px-28 mt-14 py-8"}
      >
        <CardContainer title={t("navbar:tri_dharma")} href="/tri-dharma">
          {posts.map((post, key) => (
            <Card
              key={key}
              width={"1/4"}
              href={`/tri-dharma/${post.id}`}
              title={post.attributes.title}
              description={post.attributes.description}
              image={post.attributes.image.data[0].attributes.url}
            />
          ))}
        </CardContainer>
      </div>
      <div className={"w-full flex justify-end"}>
        <div
          className={
            "bg-ylw/65 lg:w-4/5 right-0 rounded-tl-[200px] lg:px-28 mt-14 py-8"
          }
        >
          <CardContainer title={t("navbar:tri_dharma")} href="/tri-dharma">
            {posts.map((post, key) => (
              // <Card
              //   key={key}
              //   width={"1/4"}
              //   href={`/tri-dharma/${post.id}`}
              //   title={post.judul}
              //   description={post.deskripsi}
              //   image={post.gambar}
              // />
              <Card
                key={key}
                width={"1/4"}
                href={`/tri-dharma/${post.id}`}
                title={post.attributes.title}
                description={post.attributes.description}
                image={post.attributes.image.data[0].attributes.url}
              />
            ))}
          </CardContainer>
        </div>
      </div>

      <div>
        <h3 className="text-baseDark font-bold text-3xl">
          {t("navbar:services")}
        </h3>
        <div className="my-12 mx-auto">
          <div className="lg:flex justify-around">
            <Link href="/layanan/presensi">
              <div className="mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101">
                <img
                  className="mb-6 h-64"
                  src="/static/absen.png"
                  alt="Presensi"
                />
                <p className="font-semibold text-lg">
                  {t("services:attendance.item.title")}
                </p>
              </div>
            </Link>
            <Link href="/layanan/peminjaman">
              <div className="mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101">
                <img
                  className="mb-6 h-64"
                  src="/static/pinjam.png"
                  alt="Pinjam"
                />
                <p className="font-semibold text-lg">
                  {t("services:borrow.item.title")}
                </p>
              </div>
            </Link>
            <Link href="/layanan/pengembalian">
              <div className="mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101">
                <img
                  className="mb-6 h-64"
                  src="/static/retur.png"
                  alt="Retur"
                />
                <p className="font-semibold text-lg">
                  {t("services:return.item.title")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
