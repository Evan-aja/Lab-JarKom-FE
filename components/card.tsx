import Link from "next/link";
import { Card, Button } from "react-daisyui";

interface Props {
  href: string;
  title: string;
  description: string;
  image: string;
  width: string;
}

export default function CustomCard({
  href,
  title,
  description,
  image,
  width,
}: Props) {
  return (
    <div className={`my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-${width}`}>
      <Link href={href}>
        <Card className="shadow-lg border-2 hover:scale-101 duration-200 h-full">
          <Card.Image
            className="block h-56 object-cover w-full"
            src={image}
            alt="Shoes"
          />
          <Card.Body>
            <Card.Title tag="h2">{title}</Card.Title>
            <p className="mb-5 truncate">{description}</p>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
