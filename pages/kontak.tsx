import { t } from "../lib/i18n";
import Socials from "../components/socials";
import navbar from "../components/navbar";
// eslint-disable-next-line import/no-anonymous-default-export,react/display-name

export default function Kontak() {
  return (
    <>
      <div className={"pt-[90px] px-8 md:px-14 lg:px-28 mb-24"}>
        <div className={"lg:flex"}>
          <div className={"flex items-center lg:w-1/2 lg:pr-7"}>
            <div className={"font-poppins my-14 lg:my-0"}>
              <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8 text-base">
                {t("navbar:contacts")}
              </h1>
              <p className=" lg:text-lg  mb-8">
                {
                  "Silahkan menghubungi kami untuk mendapatkan informasi lebih lanjut."
                }
              </p>
            </div>
          </div>
          <div className="flex lg:w-1/2 lg:pl-7">
            <img src={"/static/maps.png"} className={"object-cover"} alt={""} />
          </div>
        </div>
        <div className={"mt-24 lg:flex w-full justify-between font-poppins"}>
          <div
            className={
              "lg:w-3/12 my-12 lg:my-0 lg:justify-start flex justify-center items-center "
            }
          >
            <div className="">
              <h3 className={"mb-4 text-center lg:text-left"}>Follow Us</h3>
              <div className={""}>
                <div className="flex justify-center lg:justify-start">
                  <div className="mr-3">
                    <Socials
                      url="https://www.twitter.com"
                      svg={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          className="h-4 w-4"
                          viewBox="0 0 300 300"
                        >
                          <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                        </svg>
                      }
                      alt="Twitter X logo"
                    />
                  </div>
                  <div className="">
                    <Socials
                      url="https://www.instagram.com"
                      svg={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          className="h-4 w-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      }
                      alt="Instagram Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"border-r border-gray-300 hidden lg:block"}></div>
          <div
            className={
              "lg:w-4/12 my-12 lg:my-0 flex items-center justify-center"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"h-7 w-7"}
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <h3 className={"font-poppins ml-4"}>lab.icn@ub.ac.id</h3>
          </div>
          <div className={"border-r border-gray-300 hidden lg:block"}></div>
          <div
            className={
              "lg:w-5/12 my-12 lg:my-0 lg:justify-end justify-center items-center flex"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-4 w-4 text-black"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <div className={"ml-4"}>
              <p className={"font-poppins text-[14px]"}>
                Fakultas Ilmu Komputer Gedung F Lt. 9.6
              </p>
              <p className={"font-poppins text-[14px]"}>
                Jl. Veteran No. 8, Malang, 65145,{" "}
              </p>
              <p className={"font-poppins text-[14px]"}>Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
