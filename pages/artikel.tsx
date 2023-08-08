import React, { useEffect } from "react";

import BackButton from "../components/BackButton";
import Image from "next/image";
import dummyData from "./dummyData";
// import { MDXRemote } from 'next-mdx-remote';
// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXProvider } from '@mdx-js/react';
import Link from "next/link";
import { Card } from "react-daisyui";
import ArticleSuggestionList from "../components/ArticleSuggestionList";

export default function Artikel() {
  const [articles, setArticles] = React.useState([]);

  return (
    <>
      <div className={"px-8 md:px-20 pt-[100px] font-poppins"}>
        <div className="flex">
          <BackButton />
        </div>
        <div className="lg:flex mt-7 md:mt-14 mb-28">
          <div className="w-full lg:w-2/3 lg:pr-14">
            <p className={"text-gray-500 mb-2"}>Pencapaian</p>
            <h1 className={"text-black font-semibold text-xl lg:text-4xl mb-4"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod{" "}
            </h1>
            <p className={"text-gray-500 mb-4"}>
              Alfian Tri Wahyu | Malang, 17 Agustus 1945
            </p>
            <div className="max-h-[400px] aspect-[5/3] mb-14">
              <Image
                src="/static/profile/profile3.png"
                alt="Image description"
                width={9999}
                height={9999}
                className="rounded-[50px] max-h-[400px] object-cover w-full"
              />
            </div>
            <p className={"text-black text-justify leading-8 lg:text-lg"}>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit, qui in ea
              voluptate velit esse, quam nihil molestiae consequatur, vel illum,
              qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero
              eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis
              praesentium voluptatum deleniti atque corrupti, quos dolores et
              quas molestias excepturi sint, obcaecati cupiditate non provident,
              similique sunt in culpa, qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio, cumque nihil impedit, quo minus id, quod maxime
              placeat, facere possimus, omnis voluptas assumenda est, omnis
              dolor repellendus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet, ut et voluptates
              repudiandae sint et molestiae non recusandae. Itaque earum rerum
              hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat.
            </p>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-14">
            <div className="rounded-50px border-2">
              <div className={"w-full px-4 py-7"}>
                <ArticleSuggestionList></ArticleSuggestionList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
