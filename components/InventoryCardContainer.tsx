import { Inventory } from "../lib/strapi/inventory";
import InventoryCard from "./InventoryCard";

interface CardContainerProps {
    inventoryData: Inventory[];
}

export default function CardContainer({ inventoryData }: CardContainerProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {inventoryData.map(item => (
                <InventoryCard key={item.id} item={item} />
            ))}
        </div>
    );
}