import { getStrapiURL } from "./helper";

export interface GuestAttendanceFormData {
  email: string;
  name: string;
  nim: string;
  phoneNumber: string;
  purpose: string;
}

export default function submitGuestAttendanceForm(
  data: GuestAttendanceFormData
) {
  return fetch(getStrapiURL("/guest-books"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  });
}
