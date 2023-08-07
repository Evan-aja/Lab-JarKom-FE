import qs from "qs";
import { getStrapiURL } from "./helper";
import delve from "dlv";

export interface Inventory {
  id: number;
  name: string;
  code: string;
  quantity: number;
  image: string;
  available: boolean;
  description: string;
}

export default async function getListInventory(): Promise<Inventory[]> {
  const baseUrl = getStrapiURL("/inventories");

  const query = qs.stringify({
    populate: {
      image: {
        fields: ["url"],
      },
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
      name: delve(item, "attributes.name"),
      code: delve(item, "attributes.code"),
      quantity: delve(item, "attributes.quantity"),
      image: delve(item, "attributes.image.data")[0].attributes.url,
      available: delve(item, "attributes.available"),
      description: delve(item, "attributes.description"),
    };
  });

  return data;
}
