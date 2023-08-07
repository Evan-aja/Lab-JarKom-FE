import { getStrapiURL } from "./helper";
import qs from "qs";

export async function getListActivity() {
  const baseUrl = getStrapiURL(`/activities`);

  const config = qs.stringify({
    populate: "image",
  });

  const result = await fetch(`${baseUrl}?${config}`).then((res) => res.json());
  return result.data;
}
