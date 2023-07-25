import { Button, Dropdown, Menu, Navbar } from 'react-daisyui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { t } from '../lib/i18n'
import DropdownItem from "react-daisyui/dist/Dropdown/DropdownItem";

export default () => {
  const router = useRouter()

  return (
    <Navbar className={'z-50 p-4 fixed bg-white text-poppins'} >
      <Navbar.Start className="w-2/12">
        <Dropdown>
          <Button color='info' tabIndex={0} className='lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
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
            <Dropdown.Item href='/profil' className={router.pathname == '/profil' ? 'font-semibold' : ''}>
              {t('navbar:profile')}
            </Dropdown.Item>
            <Dropdown.Item href='/tri-dharma' className={router.pathname == '/tri-dharma' ? 'font-semibold' : ''}>
              {t('navbar:tri_dharma')}
            </Dropdown.Item>
            <Dropdown.Item href='/layanan' className={router.pathname == '/layanan' ? 'font-semibold' : ''}>
              {t('navbar:services')}
            </Dropdown.Item>
            <Dropdown.Item href='/kontak' className={router.pathname == '/kontak' ? 'font-semibold' : ''}>
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
      <Navbar.End className="w-10/12 items-stretch">
        <Link href='/' className='btn btn-ghost normal-case text-xl flex lg:hidden'>
          <div className={`w-8 h-8 mr-3 duration-200`} style={{
            mask: 'url("/static/logo.svg") no-repeat center',
            WebkitMask: 'url("/static/logo.svg") no-repeat center',
          }} />
          {t('app_name_short')}
        </Link>
        <Menu horizontal className='p-0 hidden lg:flex'>
          <Menu.Item>
            <Link href='/' className={router.pathname == '/' ? 'font-bold' : ''}>{t('navbar:home')}</Link>
          </Menu.Item>
          <div className="dropdown dropdown-hover hover:text-base">
            <label tabIndex={0} className="btn btn-ghost normal-case font-poppins font-medium m-1 bg-base/0 outline-0">{t('navbar:profile')}</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li className="bg-amber-700 w-120"><Link href='/profil' className={router.pathname == '/profil' ? 'font-bold' : ''}>{t('navbar:profile')}</Link></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <Menu.Item>
            <Link href='/tri-dharma' className={router.pathname == '/tri-dharma' ? 'font-base' : ''}>{t('navbar:tri_dharma')}</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/layanan' className={router.pathname == '/layanan' ? 'font-base' : ''}>{t('navbar:services')}</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/kontak' className={router.pathname == '/kontak' ? 'font-base' : ''}>{t('navbar:contacts')}</Link>
          </Menu.Item>
        </Menu>
      </Navbar.End>
    </Navbar >
  )
}