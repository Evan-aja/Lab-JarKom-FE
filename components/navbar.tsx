import { Button, Dropdown, Menu, Navbar } from 'react-daisyui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { t } from '../lib/i18n'
import React, { useState } from 'react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter()
  return (
    <Navbar className={'z-50 p-4 fixed bg-white text-poppins shadow-sm'} >
      <Navbar.Start className="w-2/12">
        <Dropdown>
          <Button color='info' tabIndex={0} className='lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className='w-52 menu-compact mt-3 text-black'>
            <Dropdown.Item href='/' className={router.pathname == '/' ? 'font-semibold' : ''}>
              {t('navbar:home')}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setIsProfileOpen(!isProfileOpen)} className={router.pathname == '/profil' ? 'font-semibold' : ''}>
              {t('navbar:profile')}
              {isProfileOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
              )}
            </Dropdown.Item>
            {isProfileOpen && (
                <>
                  <div className="border border-t-gray-500 mx-4"></div>
                  <Dropdown.Item href='/profil'>
                    {t('navbar:profile')}
                  </Dropdown.Item>
                  <Dropdown.Item href='/anggota'>
                    {t('navbar:people')}
                  </Dropdown.Item>
                  <div className="border border-t-gray-500 mx-4"></div>
                </>
            )}
            <Dropdown.Item href='/tri-dharma' className={router.pathname == '/tri-dharma' ? 'font-semibold' : ''}>
              {t('navbar:tri_dharma')}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setIsOpen(!isOpen)} className={router.pathname.startsWith('/layanan') ? 'font-semibold' : ''}>
              {t('navbar:services')}
              {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
              )}
            </Dropdown.Item>
            {isOpen && (
                <>
                  <Dropdown.Item href='/layanan/presensi'>
                    {t('services:attendance:title')}
                  </Dropdown.Item>
                  <Dropdown.Item href='/layanan/coming-soon'>
                    {t('services:borrow:item:title')}
                  </Dropdown.Item>
                  <Dropdown.Item href='/layanan/coming-soon'>
                    {t('services:return:item:title')}
                  </Dropdown.Item>
                  <Dropdown.Item href='/layanan/pklskripsi'>
                    {t('services:registerpklskripsi:item:title')}
                  </Dropdown.Item>
                </>
            )}
            <Dropdown.Item href='/kontak' className={router.pathname == '/kontak' ? 'font-semibold' : ''  } >
              {t('navbar:contacts')}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link href='/' className='btn btn-ghost normal-case text-xl hidden lg:flex'>
          <div className={`w-8 h-8 mr-3 duration-200`} style={{
            mask: 'url("/static/logo.svg") no-repeat center',
            WebkitMask: 'url("/static/logo.svg") no-repeat center',
          }} />
          {t('app_name_short')}
        </Link>
      </Navbar.Start>
      <Navbar.Center className={"font-poppins"}>
        <Menu horizontal className='p-0 w-full hidden lg:flex lg:justify-between '>
          <Menu.Item>
            <Link href='/' className={router.pathname == '/' ? 'font-semibold text-base bg-transparent' : ''+'hover:text-base hover:bg-transparent font-medium'}>{t('navbar:home')}</Link>
          </Menu.Item>
          <div className="dropdown dropdown-hover hover:text-base">
            <label
                tabIndex={0}
                className={`btn btn-ghost normal-case font-poppins font-medium m-1 bg-base/0 outline-0 hover:text-base hover:bg-transparent text-[16px] ${
                    router.pathname === '/profil' || router.pathname === '/anggota' ? 'text-base font-semibold' : ''
                }`}
            >
              {t('navbar:profile')}
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-max"
            >
              <li className="bg-base text-white w-120 hover:text-base hover:bg-white">
                <a
                    href="/profil"
                    className="w-max hover:bg-transparent"
                >
                  {t('navbar:profile')}
                </a>
              </li>
              <li className="bg-base text-white w-120 hover:text-base hover:bg-white">
                <a
                    href="/anggota"
                    className="w-max hover:bg-transparent"
                >
                  {t('navbar:people')}
                </a>
              </li>
            </ul>
          </div>
          <Menu.Item>
            <Link href='/tri-dharma' className={router.pathname == '/tri-dharma' ? 'font-semibold text-base bg-transparent' : ' ' +'hover:text-base hover:bg-transparent font-medium focus:bg-transparent focus:text-base'}>{t('navbar:tri_dharma')}</Link>
          </Menu.Item>
          <div className="dropdown dropdown-hover hover:text-base">
            <label
                tabIndex={0}
                className={`btn btn-ghost normal-case font-poppins font-medium m-1 bg-base/0 outline-0 hover:text-base hover:bg-transparent text-[16px] ${
                    router.pathname === '/layanan/presensi' || router.pathname === '/layanan/peminjaman' || router.pathname === '/layanan/pklskripsi' ? 'text-base font-semibold' : ''
                }`}
            >
              {t('navbar:services')}
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-max"
            >
              <li className="bg-base text-white w-120 hover:text-base hover:bg-white">
                <Link
                    href="/layanan/presensi"
                    className="w-max hover:bg-transparent"
                >
                  {t('services:attendance:title')}
                </Link>
              </li>
              <li className="bg-base text-white w-120 hover:text-base hover:bg-white">
                <Link
                    href="/coming-soon"
                    className="w-max hover:bg-transparent"
                >
                  {t('services:borrow:item:title')}
                </Link>
              </li>
              <li className="bg-base text-white w-120 hover:text-base hover:bg-white">
                <Link
                    href="/coming-soon"
                    className="w-max hover:bg-transparent"
                >
                  {t('services:return:item:title')}
                </Link>
              </li>
              <li className="bg-base text-white w-120 hover:text-base hover:bg-white">
                <a
                    href="/layanan/pklskripsi"
                    className="w-max hover:bg-transparent"
                >
                  {t('services:registerpklskripsi:item:title')}
                </a>
              </li>
            </ul>
          </div>
        </Menu>
      </Navbar.Center>
      <Navbar.End className="w-10/12 lg:flex ">
        <Link href='/' className='btn btn-ghost normal-case text-xl flex lg:hidden'>
          <div className={`w-8 h-8 mr-3 duration-200`} style={{
            mask: 'url("/static/logo.svg") no-repeat center',
            WebkitMask: 'url("/static/logo.svg") no-repeat center',
          }} />
          {t('app_name_short')}
        </Link>

        <Link href='/kontak' className={router.pathname == '/kontak' ? 'btn btn-primary mr-14 font-semibold font-poppins hidden normal-case lg:flex' : ''+'btn btn-primary mr-14 font-medium font-poppins hidden lg:flex normal-case' }>{t('navbar:contacts')}</Link>

      </Navbar.End>
    </Navbar >
  )
}