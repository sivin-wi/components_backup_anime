
import { Hover_Card } from "../Details_Hover_Card_Comp/Hover_Card"
import { Navbar } from "../Navbar_Comp/Navbar"
import {Slider} from '../Slider/Slider'

export const Layout_Home_Content_View_Slide = ()=>{
    return(
        <div className="overflow-hidden container
        relative  grid grid-cols-4 grid-rows-10  h-screen max-w-full">
       {/*slide*/}
          <Slider/>
        {/*...*/}
        {/**/}          
          <Navbar />
        {/*....*/}
          {/*Treading Cards*/}
            <div className="
             w-full h-full 
             col-[1/span4]
             row-[9/span10]
            flex
            items-center
            justify-evenly
            overflow-y-hidden
            absolute
            gap-10
            scroll-m-0
            snap-x snap-mandatory
            z-30
            [&::-webkit-scrollbar]:hidden
             ">
            {
                Array.from({length:30}).map((_,i)=>(
                    <Hover_Card key={i} isDetailsHidden={true} />
                ))
             }
            </div>
             {/*....*/}
             
        </div>
    )
}
