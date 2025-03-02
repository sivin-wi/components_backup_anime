/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';
import {Styled_div} from './Pagination.styled'
import {useState} from 'react'
import PropTypes, { number } from 'prop-types'

export const Pagination = ({currentPage,totalPages,onPageChange})=>{
     // onPageChange is call back()...
       // generate page numbers to display -> eg: range 1-5, 5-10
       const getPageNumbers = ()=>{
         const rangeStart = Math.max(1, currentPage-2);
         const rangeEnd = Math.min(totalPages,currentPage+2);
         // {length:n} -> it creates 'n' no.of slots 'undefined' Array
         
        //  console.log('page > ', Array.from({length:rangeEnd-rangeStart+1},(_,i)=>rangeStart+i));
         
         return Array.from({length:rangeEnd-rangeStart+1},(_,i)=>rangeStart+i);
       }
    return(
        <>
        <Styled_div>
           {/*Prev btn*/}
            <button disabled={currentPage===1} className='border-2 flex justify-center flex-1 bg-[#09090b] rounded-bl-full rounded-tl-full'>
              
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4'><path fill="#ffffff" d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"/></svg> 
            </button>
            {/*dynamically render.. limit " 5 " */}
            {getPageNumbers().map((page)=>(
                  <button 
                  key={page} 
                  
                   css={{
                    border: "2px solid #fff",
                    flex: 1,
                    color: '#ffff',
                    background: (currentPage===page )?'#06dc03':'#09090b',
                   }}
                   onClick={()=> onPageChange(page)}
                  >
                    {page}
                  </button>
            ))}
            {/*..*/}
            {/*Next btn*/}
            <button disabled={currentPage===totalPages} className='border-2 flex justify-center flex-1 bg-[#09090b] rounded-br-full rounded-tr-full'>
            <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3l0 41.7 0 41.7L52.5 440.6zM256 352l0-96 0-128 0-32c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-64z"/></svg>
            </button>
        </Styled_div>
        </>
    )
}

Pagination.propTypes={
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func
}
