import { Top10_Card, Details_Card, Pagination } from "../index";

export const Contain_List_Screen = () => {
  return (
    <>
      {/*container*/}
      <div className="bg-[#09090b] container  max-w-full h-screen">
        {/*Top 10*/}
        <div className=" h-[20rem] bg-[#09090b]  overflow-hidden">
          <div className=" flex items-baseline justify-between px-8">
            <h1 className="font-semibold text-[1.9rem] text-white">Top 10</h1>
            <button className="border-2 border-green-600 py-2 px-6 rounded-xl font-semibold  bg-[#09090b] text-white">
              Back
            </button>
          </div>
          <div className="[&::-webkit-scrollbar]:hidden overflow-x-scroll transition-all ease-in-out snap-x snap-mandatory  w-full  h-[16.1rem] items-center justify-around flex gap-16 ">
            {/*limit 10 cards*/}
            {/*TODO: key 'important'*/}
            {Array.from({ length: 10 }).map((_, i) => (
              <Top10_Card img={""} value={i + 1} key={""} />
            ))}
          </div>
        </div>
        {/*...*/}
        {/*Treading*/}
        <div className="bg-[#09090b]   w-full h-full">
          <h1 className="font-semibold text-[1.9rem] text-white py-2 mx-8">
            Treading
          </h1>
          {/*card*/}
          {/* limit 10 one time*/}
          <div className="grid grid-cols-5 place-items-center  h-auto w-full grid-rows-2 gap-y-4 gap-x-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <Details_Card key={""} />
            ))}
          </div>
          {/*...*/}
          {/*pagination*/}
          <div className="mt-6 flex items-center justify-center  w-full h-[5.8rem] ">
            <Pagination />
          </div>
          {/*...*/}
        </div>
        {/*...*/}
      </div>
      {/*.....*/}
    </>
  );
};
