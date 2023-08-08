import getListInventory, { Inventory } from "../../lib/strapi/inventory";
import InventoryCardContainer from "../../components/InventoryCardContainer";
import Heading from "../../components/heading";

interface InventoryProps {
  inventoryData: Inventory[];
}

export default function InventoryPage({ inventoryData }: InventoryProps) {
  return (
    <div className="lg:px-52 px-14 mb-16">
      <div className="px-5 lg:px-28 pt-[100px] mb-15">
        <Heading
          title={"Daftar Inventaris"}
          subtitle={"Laboratorium Jaringan Komputer"}
          desc={""}
        />
      </div>
      <InventoryCardContainer inventoryData={inventoryData} />
    </div>
  );
}

export async function getServerSideProps() {
  const inventoryData: Inventory[] = await getListInventory();

  return {
    props: { inventoryData },
  };
}
