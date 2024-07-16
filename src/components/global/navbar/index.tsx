import { Spacer } from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher'
import { Login } from '../../login';
import { GLOBAL_HEADER_HEIGHT } from '@/src/constants/layout';
import Link from 'next/link';
import { Avatar } from '../avatar';
import { clsxm } from '@/src/utils/clsxm';
import { SlugName } from './slugName';

const defaultAvaterConfig = {
  imgSrc: `${process.env.NODE_ENV === 'production' ? 'https://student-ming.github.io/imaginifty' : ''}/images/logo.svg`,
  className: 'bg-transparent cursor-pointer',
  linkPath: '/',
};

export const NavBar = () => {
  const { imgSrc, className, linkPath } = {
    ...defaultAvaterConfig
  };

  return (
    <header style={{ height: `${GLOBAL_HEADER_HEIGHT}px` }} className='flex items-center w-full bg-cover bg-header'>
      <div className='flex justify-between xl:px-8 px-4 w-full h-8'>
        <div className='flex items-center mr-10 max-lg:mr-2'>
          <Link href={linkPath}>
            <Avatar
              className={clsxm(
                'mr-2 transition-all duration-500 ease-in-out transform hover:scale-120',
                className,
              )}
              imgSrc={imgSrc}
              imgdesc='welcome to imaginifty!'
              size={34}
              shape='circle'
            />
          </Link>
          <SlugName
            className='flex-1'
            slugLink={'/'}
            useLink={true}
            slugName={'imaginifty'} />
        </div>
        <div className='flex justify-end items-center gap-4'>
          <ThemeSwitcher />
          <Login></Login>
        </div>
      </div>
    </header>
  )
}