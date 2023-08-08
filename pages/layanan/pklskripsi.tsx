import { FormEvent, useState } from "react";
import { Button, Input, InputGroup } from "react-daisyui";
import { toast } from "react-toastify";
import Jumbotron from "../../components/jumbotron";
import FileUpload from "../../components/file-input";
import Content from "../../components/content";
import { t } from "../../lib/i18n";
import submitRegistration, {
  RegistrationJSONData,
} from "../../lib/strapi/registration";

export default function PendaftaranPKLSkripsi() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [file, setFile] = useState<File>(); // State untuk menyimpan file yang diunggah
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (file) {
        console.log("Akan mengirim file dan sbg");
        const res = await submitRegistration(
          {
            email: email,
            name: nama,
            nim: nim,
            phoneNumber: noTelp,
            position: "Skripsi dan PKL",
            keperluan: keperluan,
          },
          file
        );

        console.log({ message: "res", res: res });
        if (res.status === 200) {
          setEmail("");
          setNama("");
          setNim("");
          setNoTelp("");
          setKeperluan("");
          toast("Pendaftaran telah berhasil", {
            type: "success",
          });
        } else {
          toast("Pendaftaran gagal disimpan.", {
            type: "error",
          });
        }
      } else {
        toast("Periksa File!", {
          type: "error",
        });
      }
    } catch (err) {
      toast("Pendaftaran gagal disimpan.", {
        type: "error",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Jumbotron
        title={t("services:registerpklskripsi.title")}
        subtitle={t("services:registerpklskripsi.subtitle")}
      />

      <Content className={"font-poppins"}>
        <div>
          <h3 className="text-baseDark font-bold text-3xl mb-8">
            {t("services:registerpklskripsi.heading")}
          </h3>
          <form onSubmit={handleSubmit} className="block text-center">
            <InputGroup
              size="lg"
              className="mb-6 shadow max-lg:input-group-vertical"
            >
              <span className="lg:w-52">{t("form:email")}</span>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                type="email"
                placeholder="paulin@ub.ac.id"
                bordered
                required
              />
            </InputGroup>
            <InputGroup
              size="lg"
              className="mb-6 shadow max-lg:input-group-vertical"
            >
              <span className="lg:w-52">{t("form:name")}</span>
              <Input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full"
                type="text"
                placeholder="Paulin Suartini"
                bordered
                required
              />
            </InputGroup>
            <InputGroup
              size="lg"
              className="mb-6 shadow max-lg:input-group-vertical"
            >
              <span className="lg:w-52">{t("form:nim")}</span>
              <Input
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                className="w-full"
                type="number"
                placeholder="205150201111099"
                bordered
                required
              />
            </InputGroup>
            <InputGroup
              size="lg"
              className="mb-6 shadow max-lg:input-group-vertical"
            >
              <span className="lg:w-52">{t("form:phone")}</span>
              <Input
                value={noTelp}
                onChange={(e) => setNoTelp(e.target.value)}
                className="w-full"
                type="tel"
                placeholder="081233382712"
                bordered
                required
              />
            </InputGroup>
            <InputGroup
              size="lg"
              className="mb-6 shadow max-lg:input-group-vertical"
            >
              <span className="lg:w-52">{t("form:purpose")}</span>
              <Input
                value={keperluan}
                onChange={(e) => setKeperluan(e.target.value)}
                className="w-full"
                type="text"
                placeholder={t("form:purpose_placeholder")!}
                bordered
                required
              />
            </InputGroup>
            <InputGroup className="mb-10">
              <span className={"font-medium"}>{t("Curriculum Vitae")}</span>
              <FileUpload
                onFileChange={(uploadedFile) => setFile(uploadedFile)}
              />{" "}
              {/* Gunakan komponen FileUpload */}
            </InputGroup>
            <Button
              color="ghost"
              className={`bg-base text-white hover:text-base w-full lg:w-52 ${
                isLoading && "loading"
              }`}
            >
              {t("button_send")}
            </Button>
          </form>
        </div>

        <div className="lg:flex  font-poppins w-full items-center justify-center ">
          <a
            className="lg:mr-12 mt-14 md:flex btn btn-ghost lg:h-24 lg:text-lg"
            href={"/layanan/presensi"}
          >
            <div className="flex h-10 w-10 md:h-20 md:w-20 mr-3 items-center justify-center object-cover">
              <img className="" src="/static/presensi.png" />
            </div>

            <span className={"normal-case"}>
              {t("services:attendance:item:title")}
            </span>
          </a>
          <a
            className=" mt-14 md:flex btn btn-ghost lg:h-24 lg:text-lg"
            href={"/"}
          >
            <div className="flex h-10 w-10 md:h-20 md:w-20 mr-3 items-center justify-center object-cover">
              <img className="" src="/static/peminjaman.png" />
            </div>
            <span className={"normal-case"}>
              {t("services:borrow:item:title")}
            </span>
          </a>
        </div>
      </Content>
    </>
  );
}
