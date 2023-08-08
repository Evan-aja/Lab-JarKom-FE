import {getStrapiURL} from "./helper";
import qs from "qs";
import delve from "dlv";

export interface Activity {
  id: number;
  title: string;
  image: string;
  description: string;
  tags?: string[];
  article?: string[];
  member_lists?: string[];
}

export default async function getListActivity(): Promise<Activity[]> {
  const baseUrl = getStrapiURL(`/activities`);

  // TODO: how to populate tags, article, member_lists etc
  const config = qs.stringify({
    populate: {
      image: {
        fields: ["url"],
      },
    },
    pagination: {
      pageSize: 5,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });

  const result = await fetch(`${baseUrl}?${config}`).then((res) => res.json());

  return result.data.map((activity: any) => {
    return {
      id: activity.id,
      title: delve(activity, "attributes.title"),
      image: delve(activity, "attributes.image.data")[0].attributes.url,
      description: delve(activity, "attributes.description"),

      tags: activity.tags
          ? activity.tags.map((tag: any) => delve(tag, "attributes.name"))
          : [],

      article: activity.article
          ? activity.article.map((article: any) =>
              delve(article, "attributes.title")
          )
          : [],

      member_lists: activity.member_lists
          ? activity.member_lists.map((member: any) =>
              delve(member, "attributes.name")
          )
          : [],
    };
  });
}
