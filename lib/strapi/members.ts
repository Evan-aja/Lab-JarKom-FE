import { getStrapiURL } from "./helper";

export default async function getMembers() {
  const baseUrl = getStrapiURL(`/member-lists?populate=image`);

  const data = await fetch(baseUrl).then((res) => res.json());

  const member = data.data.map((item) => {
    return {
      id: item.id,
      name: item.attributes.name,
      position: item.attributes.position,
      department: item.attributes.department,
      studyProgram: item.attributes.scientificField,
      email: item.attributes.email,
      isStudent: item.attributes.category === "Mahasiswa",
      image: item.attributes.image.data.attributes.url,
    };
  });

  return member;
}
