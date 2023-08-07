import { getStrapiURL } from "./helper";

export async function getListArticles() {
  const baseUrl = getStrapiURL(`/articles?populate=image`);

  const data = await fetch(baseUrl).then((res) => res.json());
  return data.data.map((item) => {
    return {
      id: item.id,
      title: item.attributes.title,
      image: item.attributes.image.data.attributes.url,
      content: item.attributes.content,
      link: "/articles/" + item.id,
    };
  });
}
