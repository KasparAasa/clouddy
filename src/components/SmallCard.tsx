import React, {FC, PropsWithChildren} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

interface SmallCardProps {
    headline: string,
    description: string,
    logo: IconDefinition
    color: string
}
export const SmallCard: FC<SmallCardProps> = (props) => {

  return (

      <div
        className={'flex flex-col items-center align-middle pt-8 bg-slate-800 rounded-2xl border-2 border-slate-700 min-w-[250px] max-w-[280px] flex-1'}>

        <div className={`icon-bg-${props.color} rounded-full flex w-32 h-32 flex-col`}>
          <div className={'justify-center flex'}>
            <FontAwesomeIcon icon={props.logo} size={'5x'} className={`icon-${props.color} p-5`}/>
          </div>
        </div>

        <div className={'font-bold text-xl px-6 pt-12 text-center'}>
          {props.headline}
        </div>
        <div className={'text-lg pt-4 text-center px-6 py-5'}>
          {props.description}
        </div>
      </div>

  )
}