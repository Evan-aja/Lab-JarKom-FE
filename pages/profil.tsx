import React, { useEffect } from "react";
import CardView from "../components/profile-card";
import CardViewContainer from "../components/profile-card-container";

import { t } from "../lib/i18n";
import CardContainer from "../components/profile-card-container";
import getListArticle, { Article } from "../lib/strapi/article";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const articles = await getListArticle();
  // console.log(articles);

  return {
    props: {
      articles,
    },
  };
};

export default function Profil({
  articles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className={"px-8 lg:px-14 pt-[80px]"}>
        <div>
          <div className={"lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-14"}>
            <div className="flex flex-wrap items-end pt-7">
              <div className="w-1/2 pr-3 md:pr-7 ">
                <img
                  src="/static/profile/profile1.png"
                  alt="Image 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-1/2 pr-3 md:pl-7">
                <img
                  src="/static/profile/profile2.png"
                  alt="Image 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className={"flex items-center font-poppins"}>
              <div>
                <h3 className={"text-base mt-4"}>
                  {t("profile:title-profile")}
                </h3>
                <h2 className={"text-black font-semibold text-3xl mt-4"}>
                  {t("profile:subtitle-profile")}
                </h2>
                <p className={"mt-4"}>{t("profile:desc-profile")}</p>
              </div>
            </div>
            <div className={""}>
              <img
                className={"object-contain w-full h-full"}
                src={"/static/profile/profile3.png"}
                alt={""}
              />
            </div>
            <div>
              <img
                className={"object-contain w-full h-full"}
                src={"/static/profile/profile4.png"}
                alt={""}
              />
            </div>
          </div>
        </div>
        <div className={"my-28 "}>
          <div className={"flex justify-center"}>
            <h2 className={"text-4xl text-base font-poppins font-semibold"}>
              {t("profile:article-profile")}
            </h2>
          </div>
          <div className={"mt-14"}>
            <div>
              <CardContainer articles={articles} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
