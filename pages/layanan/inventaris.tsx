import getListInventory, { Inventory } from "../../lib/strapi/inventory";
import InventoryCardContainer from "../../components/InventoryCardContainer";
import Heading from "../../components/heading";

interface InventoryProps {
    inventoryData: Inventory[];
}

export default function InventoryPage({ inventoryData }: InventoryProps) {
    return (

        <div className="px-14 lg:px-28 pt-[100px]">
            <Heading
            title={'Daftar Inventaris'}
            subtitle={'Laboratorium'}
            desc={''}/>
            <InventoryCardContainer inventoryData={inventoryData} />
        </div>
    );
}

export async function getServerSideProps() {
    const inventoryData: Inventory[] = await getListInventory();

    return {
        props: { inventoryData }
    }
}
