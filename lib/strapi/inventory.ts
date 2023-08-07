import { getStrapiURL } from "./helper";

export async function getListInventory() {
  const baseUrl = getStrapiURL(`/inventories?populate=image`);

  console.log(baseUrl);
  const data = await fetch(baseUrl).then((res) => res.json());
  return data.data.map((item) => {
    return {
      id: item.id,
      nama: item.attributes.name,
      gambar: item.attributes.image.data.attributes.url,
      deskripsi: item.attributes.description,
      jumlah: item.attributes.quantity,
    };
  });
}
