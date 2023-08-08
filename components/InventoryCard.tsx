import { Inventory } from "../lib/strapi/inventory";

interface InventoryCardProps {
    item: Inventory;
}

export default function InventoryCard({ item }: InventoryCardProps) {
    return (
        <div className="card bordered">
            <figure className={'aspect-square object-cover'}>
                <img src={item.image} className={'object-cover w-full h-full'} alt={item.name}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.available ? "Available" : "Unavailable"}</p>
                <p>{`Quantity: ${item.quantity}`}</p>
            </div>
        </div>
    );
}