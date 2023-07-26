import {FC, PropsWithChildren} from 'react'
import Link from 'next/link'

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      <header className={'flex items-center px-6 py-4 justify-between'}>
        <div className={'flex text-slate-200'}>
          <Link href={'/'}>
            <img className={'h-10'} src={'/Cloudey-light.svg'} alt={'cloudey logo'} />
          </Link>
        </div>
        <div className={'flex gap-6 text-slate-200 font-bold'}>
          <Link href={'/#'}>WEB HOSTING</Link>
          <Link href={'/#'}>CLIENT PORTAL</Link>
          <Link href={'/#'}>HELP</Link>
          <Link href={'/#'}>CONTACT</Link>
        </div>
      </header>
      <div className={'flex justify-center p-6'}>
        <div className={'max-w-screen-xl w-full'}>
          {children}
        </div>
      </div>
    </div>
  )
}