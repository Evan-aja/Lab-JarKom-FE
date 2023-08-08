import Link from "next/link";
import { Button } from "react-daisyui";
interface Props {
  title: string;
  subtitle: string;
  desc: string;
}

export default function CustomHeading({ title, subtitle, desc }: Props) {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-[40px] text-base font-semibold">
        {title}
      </h1>
      <h2 className="text-2xl md:text-2xl lg:text-[40px] text-base font-semibold">
        {subtitle}
      </h2>
      <p className="lg:text-md mt-8">{desc}</p>
    </>
  );
}
