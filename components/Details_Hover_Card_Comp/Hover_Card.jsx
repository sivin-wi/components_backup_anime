/** @jsxImportSource @emotion/react*/

import {Styled_Hover_Card,Styled_sub_container_one,Styled_sub_container_three,Styled_sub_container_two,Styled_img,Styled_hover_details_card} from './Hover_Card.Styled'
import {css} from '@emotion/react'
import PropTypes from 'prop-types'

export const Hover_Card = ({isDetailsHidden}) => {
 
  return (
    <div className=' w-[12.7rem]  h-auto transition-all ease-in-out snap-center relative group'>
        <Styled_hover_details_card className='bg-black flex justify-center items-center '>
     <svg className='w-8 text-pretty absolute z-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
     </Styled_hover_details_card>
     {/*Hover container start */}
    <Styled_Hover_Card  
    
    css={
      css`
        display: ${isDetailsHidden? 'none' : 'flex'};
      `
    }
    className=' absolute  top-0 z-50 opacity-0 pointer-events-none group-hover:opacity-100  group-hover:pointer-events-none transition-opacity duration-300 ease-linear'>
        <Styled_sub_container_one>
             <Styled_img src={''}/>
        </Styled_sub_container_one>
        <Styled_sub_container_two className='overflow-hidden text-ellipsis text-center ps-4'>
           {"eee".repeat(30)}
        </Styled_sub_container_two>
        <Styled_sub_container_three>
          <button className='ms-3'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
          </button>
          <button className='ms-5'>
          <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#f7f7f7" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
          </button>
        </Styled_sub_container_three>       
    </Styled_Hover_Card>
     {/*Hover container end */}
    </div>
  )
}

Hover_Card.propTypes={
  isDetailsHidden: PropTypes.bool
}