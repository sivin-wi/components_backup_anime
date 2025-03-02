import styled from '@emotion/styled'

export const Styled_main_div=styled.div`
    height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #09090b;
`
export const Styled_container_one = styled.div`
    background-color: #09090b;
    width: 100%;
    height: 25%;
    background-image: url(${({src})=> src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

export const Styled_container_two = styled.div`
   
    width: 100%;
    height: 75%;
    background-color: #09090b;
`



export const Styled_overlay = styled.div`
    max-width: 100%;
    height: 100vh;
    background-color: #09090b95;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    grid-template-columns: 180px 220px repeat(4,minmax(80px,1fr)) 180px;
    grid-template-rows: repeat(10,minmax(50px,1fr));  
    gap:20px 20px;
`

export const Styled_description_detail_container = styled.div`
  width: 100%;
  height: auto;
  background-color: #09090b;
`

export const Styled_img = styled.img`
    outline:2px solid white;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #09090b;
    border-radius: 8px;
` 
export const Styled_container_episode_list = styled.div`
    width: 100%;
    height: auto;
    background-color: #09090b;
`
