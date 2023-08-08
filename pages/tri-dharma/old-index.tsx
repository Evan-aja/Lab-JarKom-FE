import { useEffect, useState } from "react";
import Content from "../../components/content";
import Card from "../../components/card";
import CardContainer from "../../components/card-container";
import { t } from "../../lib/i18n";
import { Kegiatan } from "../../types/models";
import ImageJumbotron from "../../components/image-jumbotron";

export default function HomeTriDharma() {
  const [posts, setPosts] = useState<Kegiatan[]>([]);

  useEffect(() => {
    fetch("/api/kegiatan")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  return (
    <>
      <ImageJumbotron
        title={t("tri-dharma:title")}
        subtitle={t("tri-dharma:subtitle")}
        // description={t("tri-dharma:description")}
        // buttonText={t("tri-dharma:button")}
      />

      <Content>
        <CardContainer
          title={t("tri-dharma:research")}
          href="/tri-dharma/penelitian"
          // button={t("button_more")}
        >
          {posts
            .filter((post) => post.tipe === 1)
            .slice(0, 4)
            .map((post, key) => (
              <Card
                key={key}
                width={"1/4"}
                href={`/tri-dharma/${post.id}`}
                title={post.judul}
                description={post.deskripsi}
                image={post.gambar}
              />
            ))}
        </CardContainer>

        <CardContainer
          title={t("tri-dharma:dedication")}
          href="/tri-dharma/pengabdian"
          // button={t("button_more")}
        >
          {posts
            .filter((post) => post.tipe === 2)
            .slice(0, 4)
            .map((post, key) => (
              <Card
                key={key}
                width={"1/4"}
                href={`/tri-dharma/${post.id}`}
                title={post.judul}
                description={post.deskripsi}
                image={post.gambar}
              />
            ))}
        </CardContainer>

        <CardContainer
          title={t("tri-dharma:education")}
          href="/tri-dharma/pendidikan"
          // button={t("button_more")}
        >
          {posts
            .filter((post) => post.tipe === 3)
            .slice(0, 4)
            .map((post, key) => (
              <Card
                key={key}
                width={"1/4"}
                href={`/tri-dharma/${post.id}`}
                title={post.judul}
                description={post.deskripsi}
                image={post.gambar}
              />
            ))}
        </CardContainer>

        <CardContainer
          title={t("tri-dharma:other")}
          href="/tri-dharma/kegiatan-lain"
          // button={t("button_more")}
        >
          {posts
            .filter((post) => post.tipe === 4)
            .slice(0, 4)
            .map((post, key) => (
              <Card
                key={key}
                width={"1/4"}
                href={`/tri-dharma/${post.id}`}
                title={post.judul}
                description={post.deskripsi}
                image={post.gambar}
              />
            ))}
        </CardContainer>
      </Content>
    </>
  );
}
