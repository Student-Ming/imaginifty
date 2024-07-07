import { Spacer } from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher'
import { Login } from '../../login';

export const NavBar = () => {
  return (
    <div className='flex justify-end items-center h-[65px] bg-gradient-to-r from-[#04367b] from-10% via-[#080e17] via-30% to-[#33174a] to-90%'>
      <ThemeSwitcher />
      <Spacer x={4} />
      <Login></Login>
      <Spacer x={10} />
    </div>
  )
}