import {Layout} from '@/components/Layout'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faCubesStacked,
  faLock,
  faPaperPlane,
  faRocket,
  faStars,
  faCode,
  faAtom,
  faGear,
  faCommentsQuestionCheck,
  faChartNetwork,
  faArrowUpBigSmall, faRulerTriangle, faAtomSimple, faShieldCheck,
} from '@fortawesome/pro-duotone-svg-icons'
import {faBolt} from '@fortawesome/pro-solid-svg-icons'
import {SmallCard} from '@/components/SmallCard'
import Link from 'next/link'


export default function Project() {

  return (
    <Layout>
      <div className={'flex flex-col items-center py-28 flex-wrap text-center px-20'}>
        <h1 className={'text-7xl font-extrabold py-1'}>
          Digital experiences
        </h1>
        <div className={'text-5xl font-bold pt-2 pb-16 text-blue-500'}>
          to power your dreams
        </div>
        <div className={'text-xl'}>
          <span className={'font-bold'}>
            Web hosting, development, and consulting&nbsp;
          </span>
          for businesses that need a long-term partner,&nbsp;
          <span className={'italic'}>not a one-night stand.</span>
        </div>
      </div>

      <div className={'p-6 flex flex-col gap-20 pb-52'}>

        <div className={'flex px-4'}>
          <div>
            <FontAwesomeIcon icon={faPaperPlane} size="6x" className={'text-blue-600'}/>
          </div>
          <div className={'flex flex-col px-10 justify-center'}>
            <div className={'font-bold text-blue-500 text-4xl'}>
              Web hosting
            </div>
            <div className={'text-2xl'}>
              for blogs and websites
            </div>
          </div>
        </div>

        <div className={'gap-y-8 gap-x-8 flex flex-wrap justify-center'}>
          <SmallCard
            headline={'SIMPLE BUT POWERFUL'}
            description={'Intuitive tools make it a breeze to build and manage your website, even as a beginner.'}
            logo={faStars}
            color={'blue'}
          />
          <SmallCard
            headline={'ONE-CLICK-INSTALLER'}
            description={'Install hundreds of different web applications with a single click, including WordPress, Drupal, etc.'}
            logo={faCubesStacked}
            color={'blue'}
          />
          <SmallCard
            headline={'SECURE'}
            description={'Keep your website safe with daily backups, automatic updates, and a robust web application firewall.'}
            logo={faLock}
            color={'blue'}
          />
          <SmallCard
            headline={'SUPERCHARGED'}
            description={'Your website loads fast anywhere in the world, even under heavy loads, thanks to our scalable cloud infrastructure.'}
            logo={faRocket}
            color={'blue'}
          />
        </div>

        <div
          className={'py-8 px-16 gap-x-5 gap-y-8 items-center flex-wrap justify-center border border-blue-800 blue-glow rounded-2xl flex'}>
          <div className={'flex flex-col max-w-[800px]'}>
            <div className={'font-bold text-blue-500 text-2xl pb-4'}>
              Everything you need to get your site up and running
            </div>
            <div className={'text-lg'}>
              Suitable for small and medium-traffic websites, our shared hosting makes it easy to establish a web
              presence while keeping costs low.
            </div>
          </div>
          <div className={'flex justify-center'}>
            <Link
              className={'py-4 px-10 bg-blue-600 hover hover:bg-blue-700 hover:text-slate-200 rounded-lg flex justify-center font-bold text-lg w-max'}
              href={'/#'}> GET STARTED </Link>
          </div>
        </div>

      </div>


      <div className={'p-6 flex flex-col gap-20 pb-52'}>

        <div className={'flex px-4'}>
          <div>
            <FontAwesomeIcon icon={faCode} size="6x" className={'text-green-600'}/>
          </div>
          <div className={'flex flex-col px-10 justify-center'}>
            <div className={'font-bold text-green-500 text-4xl'}>
              Web hosting
            </div>
            <div className={'text-2xl'}>
              for blogs and websites
            </div>
          </div>
        </div>

        <div className={'gap-y-8 gap-x-8 flex flex-wrap justify-center'}>
          <SmallCard
            headline={'MODERN TECH'}
            description={'We work with industry-leading tools and technology to build modern, performant, and maintainable applications.'}
            logo={faAtom}
            color={'green'}
          />
          <SmallCard
            headline={'PERFORMANCE'}
            description={'When it comes to website performance, every millisecond matters. Software we create is blazing fast, no matter how complex.'}
            logo={faBolt}
            color={'green'}
          />
          <SmallCard
            headline={'PARTNERS'}
            description={'We believe in long-term partnerships and a common vision to build the best digital experiences for your company and customers.'}
            logo={faCommentsQuestionCheck}
            color={'green'}
          />
          <SmallCard
            headline={'EXPERTISE'}
            description={'We have years of experience in building complex applications used by millions of users all over the globe.'}
            logo={faGear}
            color={'green'}
          />
        </div>

        <div
          className={'py-8 px-16 gap-x-5 gap-y-8 items-center flex-wrap justify-center border green-glow border-green-800 rounded-2xl flex'}>
          <div className={'flex flex-col max-w-[800px]'}>
            <div className={'font-bold text-green-500 text-2xl pb-4'}>
              Transform your business through great software
            </div>
            <div className={'text-lg'}>
              From small projects to complex systems, we can make it happen through modern technology and strong cooperation.
            </div>
          </div>
          <div className={'flex justify-center'}>
            <Link
              className={'py-4 px-10 bg-green-600 hover hover:bg-green-700 hover:text-slate-200 rounded-lg flex justify-center font-bold text-lg w-max'}
              href={'/#'}> CONTACT US </Link>
          </div>
        </div>

      </div>

      <div className={'p-6 flex flex-col gap-20 pb-52'}>

        <div className={'flex px-4'}>
          <div>
            <FontAwesomeIcon icon={faChartNetwork} size="6x" className={'text-rose-600'}/>
          </div>
          <div className={'flex flex-col px-10 justify-center'}>
            <div className={'font-bold text-rose-500 text-4xl'}>
              Web hosting
            </div>
            <div className={'text-2xl'}>
              for blogs and websites
            </div>
          </div>
        </div>

        <div className={'gap-y-8 gap-x-8 flex flex-wrap justify-center'}>
          <SmallCard
            headline={'SIMPLE BUT POWERFUL'}
            description={'Intuitive tools make it a breeze to build and manage your website, even as a beginner.'}
            logo={faArrowUpBigSmall}
            color={'rose'}
          />
          <SmallCard
            headline={'ONE-CLICK-INSTALLER'}
            description={'Install hundreds of different web applications with a single click, including WordPress, Drupal, etc.'}
            logo={faRulerTriangle}
            color={'rose'}
          />
          <SmallCard
            headline={'SECURE'}
            description={'Keep your website safe with daily backups, automatic updates, and a robust web application firewall.'}
            logo={faAtomSimple}
            color={'rose'}
          />
          <SmallCard
            headline={'SUPERCHARGED'}
            description={'Your website loads fast anywhere in the world, even under heavy loads, thanks to our scalable cloud infrastructure.'}
            logo={faShieldCheck}
            color={'rose'}
          />
        </div>

        <div
          className={'py-8 px-16 gap-x-5 gap-y-8 items-center flex-wrap justify-center border red-glow border-rose-800 rounded-2xl flex'}>
          <div className={'flex flex-col max-w-[800px]'}>
            <div className={'font-bold text-rose-500 text-2xl pb-4'}>
              Everything you need to get your site up and running
            </div>
            <div className={'text-lg'}>
              Suitable for small and medium-traffic websites, our shared hosting makes it easy to establish a web
              presence while keeping costs low.
            </div>
          </div>
          <div className={'flex justify-center'}>
            <Link
              className={'py-4 px-10 bg-rose-600 hover hover:bg-rose-700 hover:text-slate-200 rounded-lg flex justify-center font-bold text-lg w-max'}
              href={'/#'}> GET STARTED </Link>
          </div>
        </div>

      </div>

      <div className={'flex flex-col justify-center text-center gap-5'}>
        <img className={'h-14'} src={'/Cloudey-light.svg'} alt={'cloudey logo'} />
        <div className={'text-slate-500 text-sm'}>
          <Link className={'font-bold text-slate-200'} href={'/#'}>HOSTING TERMS AND CONDITIONS</Link>
          &nbsp;&nbsp;-&nbsp;&nbsp;
          <Link className={'font-bold text-slate-200'} href={'/#'}>WEBSITE TERMS OF USE</Link>
          &nbsp;&nbsp;-&nbsp;&nbsp;
          <Link className={'font-bold text-slate-200'} href={'/#'}>PRIVACY POLICY</Link>
          &nbsp;&nbsp;-&nbsp;&nbsp;
          <Link className={'font-bold text-slate-200'} href={'/#'}>DATA SUBJECT RIGHTS POLICY</Link>
        </div>
        <div className={'text-xs text-slate-500'}>
          <div>COPYRIGHT © 2014-2023 CLOUDEY IT LTD | ALL RIGHTS RESERVED</div>
          <div>CLOUDEY® IS A REGISTERED TRADEMARK (NO. 58134) OF CLOUDEY IT LTD</div>
        </div>
      </div>

    </Layout>
  )
}