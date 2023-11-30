import React from 'react';

import rogueLike from '../assets/games/roguelike_game.png';
import platformIndie from '../assets/games/indieplatform_game.png';

const HeroSection = () => {
  const heroItems = [
    {
      id: "1",
      bg: rogueLike,
      genre: "The hit roguelike",
      title: "Rogue Mirage",
    },
    {
      id: "2",
      bg: platformIndie,
      genre: "Adventure",
      title: "Game Title 2",
    },
  ];

  return (
    <section className="relative w-screen h-[575px]">
      <div className="flex flex-wrap">
        {heroItems.map((item) => (
          <div key={item.id} className="w-full h-[575px] relative">
            <img
              src={item.bg}
              alt={`Background for ${item.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute flex items-center justify-center bottom-0 left-0 w-full h-[250px] border-t-4 border-black bg-gradient-to-t from-neutral-900/70 to-zinc-900/40">
              <div className="flex flex-col justify-center items-center w-[300px] h-full gap-y-2 uppercase">
                <h2 className="text-lg w-full text-center text-white font-bold">{item.genre}</h2>
                <h2 className="text-2xl w-full text-center text-[#DC143C] font-black mb-4">{item.title}</h2>
                <button className="w-full h-[50px] bg-transparent hover:bg-white hover:text-black border-2 border-white text-white uppercase font-bold transition-all duration-100 ease-in-out">Available Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;