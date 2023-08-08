import Link from "next/link";
import { Button } from "react-daisyui";

interface Props {
  title: string;
  href?: string;
  children: any;
}

export default function CardContainer({ title, children }: Props) {
  return (
    <div className="mb-20">
      <h3 className="text-white font-bold text-3xl mb-8">{title}</h3>
      <div className="mx-auto">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">{children}</div>
      </div>
    </div>
  );
}
