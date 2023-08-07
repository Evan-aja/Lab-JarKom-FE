import { getStrapiURL } from "./helper";

export interface InventoryBorrowingFormData {
  itemLoanCode: string;
  email: string;
  name: string;
  nim: string;
  phoneNumber: string;
  address: string;
  plannedDateOfReturn: string;
  purpose: string;
  inventories: string[];
}

export default function submitInventoryBorrowingForm(
  data: InventoryBorrowingFormData
) {
  return fetch(getStrapiURL("/inventory-borrowing-logs"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  });
}
