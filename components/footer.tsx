import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { Input, Button, Textarea, Footer } from "react-daisyui";
import { toast } from "react-toastify";
import { t } from "../lib/i18n";
import { getStrapiURL } from "../lib/strapi/helper";

export default function CustomFooter() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(getStrapiURL("/contact-forms"), {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          data: {
            email: email,
            name: "none",
            message: pesan,
          },
        }),
      });

      console.log(res);

      if (res.status === 200) {
        setEmail("");
        setPesan("");
        toast("Pesan berhasil dikirimkan.", {
          type: "success",
        });
      } else {
        toast("Pesan gagal dikirimkan.", {
          type: "error",
        });
      }
    } catch (err) {
      toast("Pesan gagal dikirimkan.", {
        type: "error",
      });
    }
    setLoading(false);
  };

  return (
    <footer id="footer" className={"font-poppins"}>
      <div className="bg-[url('/static/footer.jpg')] bg-cover bg-center">
        <div className="backdrop-blur-sm p-8 backdrop-filter lg:p-16 xl:p-40 backdrop-brightness-75">
          <div className="lg:w-3/4 xl:w-1/2">
            <p className="text-white font-bold text-2xl lg:text-5xl drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)] mb-6">
              {t("footer:title")}
            </p>
            <p className="text-white text-lg lg:text-xl mb-8">
              {t("footer:subtitle")}
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer:email_placeholder")!}
                  size="md"
                  className="w-60 md:w-96"
                  required
                />
              </div>
              <div className="mb-4">
                <Textarea
                  name="pesan"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  placeholder={t("footer:message_placeholder")!}
                  className="w-60 md:w-96 h-32"
                  required
                />
              </div>
              <div>
                <Button
                  type="submit"
                  color="primary"
                  className={isLoading ? "loading" : ""}
                >
                  {t("button_send")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer className="py-10 px-10 xl:px-44 bg-base/35 text-lg">
        <div className="">
          <Footer.Title className="text-base/100">Logo</Footer.Title>
          <p className="text-darkGrey">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
        <div className="xl:px-20">
          <Footer.Title className="text-black">
            {t("footer:directory_title")}
          </Footer.Title>
          <Link href="/" className="link link-hover text-darkGrey">
            {t("navbar:home")}
          </Link>
          <Link href="/profil" className="link link-hover text-darkGrey">
            {t("navbar:profile")}
          </Link>
          <Link href="/tri-dharma" className="link link-hover text-darkGrey">
            {t("navbar:tri_dharma")}
          </Link>
          <Link href="/layanan" className="link link-hover text-darkGrey">
            {t("navbar:services")}
          </Link>
          <Link href="/kontak" className="link link-hover text-darkGrey">
            {t("navbar:contacts")}
          </Link>
        </div>
        <div>
          <Footer.Title className="text-black">
            {t("footer:location_title")}
          </Footer.Title>
          <p className="text-darkGrey">{t("lab_address")}</p>
          <p className="text-darkGrey">{t("faculty_address")}</p>
          <div className="flex mt-2">
            <Link
              href={{
                pathname: router.pathname,
                query: router.query,
              }}
              locale="id"
              className="mr-4"
            >
              <img src="/static/id.svg" alt="Indonesia" width={30} />
            </Link>
            <Link
              href={{
                pathname: router.pathname,
                query: router.query,
              }}
              locale="en"
            >
              <img src="/static/us.svg" alt="English" width={30} />
            </Link>
          </div>
        </div>
      </Footer>
      <div className="bg-base/35 text-center p-8">
        <p className="text-darkGrey">
          ©{new Date().getFullYear()}. All Rights Reserved. by{" "}
          {t("app_name_short")}
        </p>
      </div>
    </footer>
  );
}
