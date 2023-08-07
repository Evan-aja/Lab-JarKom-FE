import { getStrapiURL } from "./helper";

export interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

export default function submitContactForm(data: ContactFormData) {
  return fetch(getStrapiURL("/contact-forms"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  });
}
