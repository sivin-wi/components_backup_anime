import {
  Styled_main_div,
  Styled_container_one,
  Styled_container_two,
  Styled_overlay,
  Styled_img,
  Styled_description_detail_container,
  Styled_container_episode_list,
} from "./Content_Detail_Screen.Styled.jsx";

export const Content_Detail_Screen = () => {
  return (
    <>
      <Styled_main_div>
        {/*bg img*/}
        <Styled_container_one src={""} />
        {/*...*/}
        <Styled_container_two />
      </Styled_main_div>
      {/* overlay */}
      <Styled_overlay>
        {/*functionally go back*/}
        <button
          className="
            border-2 text-white text-lg font-semibold
           col-[1/2]
           row-[2/3]
           h-10
           w-32
           justify-self-end
           self-center
           bg-[#09090b]
          rounded-md
           item
           "
        >
          Back
        </button>
        {/*....*/}
        <button
          className="
            text-white text-lg font-semibold
           col-[7/8]
           row-[3/4]
            bg-[#09090b]
          rounded-md
           h-10
           w-32
           self-center
           flex
            gap-3
           items-center
           justify-center
           "
        >
          {/*status animation*/}
          {/*Todo check condition*/}
          <span className="relative flex size-5  items-center justify-center">
            <span className="absolute inline-flex transition-all h-full w-full animate-ping  bg-green-500 rounded-full opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
          {/*......*/}
          on going
        </button>
        <Styled_img
          alt="img"
          src={""}
          className="
            col-[2/3]
            row-[3/7]
            "
        />
        <Styled_description_detail_container
          className="
               text-white
              font-medium
              text-[1.3rem]
              col-[3/7]
              row-[4/7]
              flex
              flex-col
             "
        >
          <div className="w-full p-2 h-full overflow-hidden text-ellipsis">
            <span>
              Title:
              {/*title*/}
            </span>
          </div>
          <div className="w-full h-full  flex">
            <span className="block  p-2 ">Genre:</span>
            <ul className=" w-full h-full flex items-center">
              <li>
                <button className="border-2 mx-1 text-[0.900rem] min-w-11 px-2 rounded-md">
                  ...
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full h-full  flex">
            <span className="block p-2 ">Tags:</span>
            <ul className=" w-full h-full flex items-center">
              <li>
                <button className="border-2 mx-1 text-[0.900rem] min-w-11 px-2 rounded-md">
                  ...
                </button>
              </li>
            </ul>
          </div>
        </Styled_description_detail_container>
        {/*episodes list*/}
        <Styled_container_episode_list
          className="
               col-[2/7]
               row-[7/10]
               overflow-y-scroll
       [&::-webkit-scrollbar]:hidden
       transition-all
              "
        >
          {/*dynamically generated*/}
          {/*TODO: key is missing !!*/}
          {Array.from({ length: 100 }).map((_, i) => (
            <button
              key={""}
              className="mx-3 border-2 border-green-300  my-2  w-[6rem] h-11 rounded-md text-white "
            >
              1
            </button>
          ))}
        </Styled_container_episode_list>
      </Styled_overlay>
    </>
  );
};
