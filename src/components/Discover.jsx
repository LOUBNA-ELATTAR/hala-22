import React from "react";


const Discover = () => {
  return (
    <>
    <div className="w-full h-[400px] padding my-10 relative">
                <img
                className="w-full h-full object-cover "
                src="images/languages.png"
                alt=""
                />
                <div id='translate' className="w-full h-full absolute top-0 flex justify-center items-center">
                <a href="/translate" className="text-4xl text-white font-bold px-5 py-2 border">
                    Hala 22 Translate
                </a>
                </div>
            </div>
      <div className="w-4/5 xl:w-9/12 m-auto discover flex flex-col sm:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">

        <div className="w-[500px] padding space-y-5">
        <hr></hr>
          <img
            className="drop-shadow-2xl"
            src="images/quote1.png"
            alt=""
          />
          <div className="col-md-6">
              <h2 className="font-bold">Discover Islam</h2>
              <h1 className="text-2xl font-bold">Prophet Muhammad’s Hadiths</h1>
            </div>
            <p className="text-sm">
            These murals in Pearl District of Doha, capital of Qatar, & 
            in the corridors of commercial districts r inscribed with hadiths 
            (sayings) of the Prophet & reflect the values ​​of Islam.
            </p>
            <p className="text-sm">
            Qatar seems to really take advantage of the 2022 World Cup as 
            a momentum to share its culture and values ​​with visitors who 
            come from all over the world.


            </p>
        </div>
          <div className="col-md-6  w-[500px] padding space-y-2 text-center">
            <h2 className="font-bold ">Introduction to Islam</h2>
            <p className="text-sm">
            “Why during the World Cup? Everyone is coming here from across 
            the world to Qatar, a Muslim country, and it’s an opportunity 
            to educate people about the faith,” said Abu Huraira, a volunteer 
            for the campaign by the Explore Islam Foundation and the Islam & 
            Muslims Initiative.
            </p>
            <img
              className="border-8 border-stones-700"
              src="images/quote2.jpeg"
              alt=""
            />
             <hr></hr>
          </div>
      </div>
      <div className="w-full h-[400px] padding my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="images/image-8.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
        <a href="/weather" className="text-4xl text-white font-bold px-5 py-2 border">
            Hala 22 Weather
          </a>
        </div>
      </div>
      
      <div id="" className="my-20 flex heyo justify-between items-center h-[300px]">
        <div className="xl:w-[500px] wiwi w-1/3">
          <img
            className="w-full h-full object-cover"
            src="images/wc.jpg"
            alt=""
          />
        </div>
        <div className="xl:w-[500px] wiwi padding  w-1/3 text-center space-y-5 sm:space-y-2">
          <h1 className="md:text-xl hide sm:text-sm">FIFA World Cup Qatar 2022</h1>
          <h2 className="md:text-4xl hide sm:text-base">
          HIGHLIGHTS
          </h2>
          <p className="md:text-base hide sm:text-xs">
            Check the latest WC highlights, news and matches results  
          </p>
          <a href="/worldcup"><button className="mt-5 px-5 oo py-2 border border-black">
            World Cup
          </button></a>
        </div>
        <div className="xl:w-[500px] padding wiwi w-1/3">
          <img
            className="w-full h-full object-cover"
            src="images/wc1.jpg"
            alt=""
          />
        </div>
        
      </div>
      
      
    </>
  );
};

export default Discover;
