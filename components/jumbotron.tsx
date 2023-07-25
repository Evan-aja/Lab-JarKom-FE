import Link from 'next/link'
import { Button } from 'react-daisyui'

interface Props {
  title: string,
  subtitle: string,
  description?: string | null,
  buttonText?: string | null,
  buttonHref?: string | null,
}

export default ({ title, subtitle, description, buttonText, buttonHref }: Props) => {
  const scroll = () => {
    if (buttonHref) return

    // const gradient = document.getElementById('gradient')
    // if (gradient !== null) gradient.scrollIntoView({
    //   behavior: 'smooth'
    // })
  }

  const button = (
    <Button className='border-0 bg-white text-black hover:bg-[#ffffffdd] px-20 shadow-lg' onClick={scroll}>{buttonText}</Button>
  )

  return (
    <>
      <div className='bg-base/35 text-base pt-[80px] flex lg:h-[745px] '>
        <div className="w-[496px] h-[504px] left-[-111px] top-[25px] absolute" >
          <img src='/static/roundgradient.png'/>
        </div>
        <div className='py-20 sm:px-12 md:px-20 lg:w-3/6 lg:px-28 lg:py-28 text-center lg:text-left object-left font-poppins'>
          <h1 className='text-5xl lg:text-4xl font-semibold mb-4 lg:mb-4'>{title}</h1>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-8'>{subtitle}</h2>
          <p className='lg:text-lg mb-8 text-grey lg:text-justify'>{description}</p>
          {
            buttonText &&
            (
              buttonHref
                ? <Link href={buttonHref}>{button}</Link>
                : <>{button}</>
            )

          }
        </div>
        <div className='lg:w-3/6 object-bottom hidden lg:flex pr-20'>
          <img className='' src="/static/imghome.svg" alt=""/>
        </div>
      </div>
      {/*<div className='bg-gradient-to-b from-base h-36' id='gradient' />*/}
    </>
  )
}
