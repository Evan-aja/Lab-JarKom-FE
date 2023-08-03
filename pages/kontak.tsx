import Jumbotron from '../components/jumbotron'
import Heading from "../components/heading";
import {GoogleMap, useLoadScript, }
export default () => {
  return (
    <>
      <Jumbotron title='Kontak' subtitle='Jaringan Berbasis Informasi' buttonText='Kontak' />
      <div className={"pt-[80px]"}>
          <div className={"lg:flex lg:px-28"}>
            <div className={"flex items-center lg:w-1/2"}>
              <div>
                  <Heading
                      title={"Narahubung"}
                      subtitle={""}
                      desc={"Silahkan menghubungi kami untuk mendapatkan informasi lebih lanjut."}
                  />
              </div>
            </div>
            <div>
                <
            </div>
          </div>
      </div>
    </>
  )
}
