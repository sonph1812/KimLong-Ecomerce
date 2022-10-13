import React from 'react';

const SectionTitle = ({title}) => {
  return (
      <>
        <div className={"flex justify-center items-center"}>
          <hr className={"w-96 border"}/>
          <h2  className="relative inline-block bg-white px-4 text-center text-2xl font-bold ">
            {title}
          </h2>
          <hr className={"w-96 border"}/>
        </div>



      </>

  );
};

export default SectionTitle;
