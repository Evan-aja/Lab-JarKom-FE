import qs from "qs";
import { getStrapiURL } from "./helper";
import delve from "dlv";

export interface EventAgenda {
  id: number;
  title: string;
  date: Date;
}

export default async function getListEventAgenda(): Promise<EventAgenda[]> {
  const baseUrl = getStrapiURL(`/event-agendas`);

  const query = qs.stringify({
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
      date: new Date(delve(item, "attributes.date")),
    };
  });

  return data;
}
