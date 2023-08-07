import { getStrapiURL } from "./helper";
import qs from "qs";
import delve from "dlv";

export interface Member {
  name: string;
  category: string;
  position: string;
  department: string;
  scientificField: string;
  email: string;
  nim_nip: string;
  image: string;
  isStudent: boolean;
}

export default async function getMembers(): Promise<Member[]> {
  const baseUrl = getStrapiURL("/member-lists");

  const query = qs.stringify({
    populate: {
      image: {
        fields: ["url"],
      },
    },
  });

  const data = await fetch(`${baseUrl}?${query}`).then((res) => res.json());

  const member = data.data.map((item: any) => {
    return {
      id: item.id,
      name: delve(item, "attributes.name", ""),
      position: delve(item, "attributes.position", ""),
      department: delve(item, "attributes.department", ""),
      studyProgram: delve(item, "attributes.scientificField", ""),
      email: delve(item, "attributes.email", ""),
      isStudent: delve(item, "attributes.category", "") === "Mahasiswa",
      image: delve(item, "attributes.image.data.attributes.url", ""),
    };
  });

  return member;
}
