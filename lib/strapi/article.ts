import { getStrapiURL } from "./helper";
import qs from "qs";
import delve from "dlv";

export interface Article {
  id: number;
  title: string;
  image: string;
  content: string;
  category: string;
  activity?: string;
}

export default async function getListArticles(): Promise<Article[]> {
  const baseUrl = getStrapiURL(`/articles`);

  const query = qs.stringify({
    populate: {
      image: {
        fields: ["url"],
      },
      activity: true,
    },
    pagination: {
      pageSize: 100,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });

  const result = await fetch(`${baseUrl}?${query}`).then((res) => res.json());

  const data = result.data.map((item: any) => {
    return {
      id: delve(item, "id"),
      title: delve(item, "attributes.title"),
      image: delve(item, "attributes.image.data.attributes.url"),
      content: delve(item, "attributes.content"),
      category: delve(item, "attributes.category"),
      activity: delve(item, "attributes.activity")
        ? delve(item, "attributes.activity.attributes.title")
        : null,
    };
  });

  return data;
}
