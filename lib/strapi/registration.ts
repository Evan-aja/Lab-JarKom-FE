import { getStrapiURL } from "./helper";
import qs from "qs";
import delve from "dlv";

export interface RegistrationJSONData {
  email: string;
  name: string;
  nim: string;
  phoneNumber: string;
  position: string;
  keperluan: string;
}

export default async function submitRegistration(
  data: RegistrationJSONData,
  file: File
) {
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  formData.append("files.cv", file);

  return fetch(getStrapiURL("/registrations"), {
    method: "POST",
    body: formData,
  });
}
