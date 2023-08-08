import { t } from "../lib/i18n";
import mapCategory from "../lib/mapcategory";

interface Props {
  image: string;
  category?: number;
  title?: string;
  subtitle?: string;
}

export default function ImageJumbotron({
  image,
  category,
  title,
  subtitle,
}: Props) {
  return (
    <>
      <div className="text-white pt-[80px] bg-[url('/static/header-presensi.png')] bg-cover bg-center">
        <div className="backdrop-blur-sm backdrop-filter">
          <div className="py-20 lg:py-28 text-center">
            <h1 className="text-5xl lg:text-8xl font-bold mb-4 lg:mb-8">
              {category ? mapCategory(category) : title}
            </h1>
            <h2 className="text-2xl lg:text-6xl font-bold mb-4 lg:mb-8">
              {subtitle ? subtitle : t("tri-dharma:subtitle")}
            </h2>
          </div>
          <div
            className="bg-gradient-to-b from-transparent to-white h-36"
            id="gradient"
          />
        </div>
      </div>
    </>
  );
}
