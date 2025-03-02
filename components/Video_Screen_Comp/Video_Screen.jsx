import {
    Styled_video_container,
   Styled_video_footer
} from './Video_Screen.Styled'

// import media player Comp
   import {MediaPlayer,MediaProvider} from '@vidstack/react';
   import {defaultLayoutIcons,DefaultVideoLayout} from  '@vidstack/react/player/layouts/default';
// ...

export const Video_Screen = ()=>{
    return(
          <div className=' h-screen max-w-full flex flex-col'>
            {/*video player container*/}
          <Styled_video_container>
              {/*.... package..comp*/}
             <MediaPlayer poster='' className='max-w-full h-full'  title='' src={''}>
                <MediaProvider/>
                {/* Note: thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" */}
                <DefaultVideoLayout thumbnails={''} icons={defaultLayoutIcons}/>
             </MediaPlayer>
              {/*....*/}
          </Styled_video_container>
          {/*....*/}
          {/*footer 'control'*/}
          <Styled_video_footer>
            <div className=' w-full h-full flex items-center justify-start gap-6'>
            <span className='text-[1.2rem]  font-semibold text-white mx-8'>Servers:</span>
            <div className='
            [&::-webkit-scrollbar]:hidden
            flex snap-x transition-all snap-mandatory gap-x-4 w-[30rem] overflow-x-auto'>
                 {/*dynamically  duplicate (render)*/}
             {Array.from({length:30}).map((_,i)=>(
                 <button  key={''} className='snap-center border-2 text-white p-[6px_28px] border-green-500 font-semibold rounded-md'>1</button>
             ))}
            </div>
            </div>
            <div className='flex items-center  justify-end gap-x-5   text-[1rem] font-semibold  w-full h-full'>
            <button className=' border-2 p-[6px_20px] rounded-md  text-white border-green-500'>No: 1</button>
            <button  className=' border-2 p-[6px_20px]  rounded-md text-white border-green-500'>Back</button>
            <button  className=' border-2 p-[6px_20px] mr-7 rounded-md text-white border-green-500'>Next</button>
            </div>
          </Styled_video_footer>
          {/*....*/}
          </div>
    )
}