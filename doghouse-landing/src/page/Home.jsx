import React from 'react'
import NavbarComp from '../components/NavbarComp'

const Home = () => {
    return (
        <main>
            <NavbarComp />
            <section className="relative w-screen h-[575px] bg-green-500">
                <div id="hero-game" className="absolute flex items-center justify-center bottom-0 left-0 w-full h-[250px] border-t-4 border-black bg-gradient-to-t from-neutral-900/70 to-zinc-900/10">
                    <div id="game-content" className="flex flex-col justify-center items-center w-[300px] h-full gap-y-2 uppercase">
                        <h2 className="text-lg w-full text-center text-white font-bold">The Hit Roguelike</h2>
                        <h2 className="text-2xl w-full text-center text-[#DC143C] font-black mb-4">Rogue Mirage</h2>
                        <button className="w-full h-[50px] bg-transparent hover:bg-white hover:text-black border-2 border-white text-white uppercase font-bold transition-all duration-100 ease-in-out">Available Now</button>
                    </div>
                </div>
            </section>
            <section id="games-section" className="relative flex flex-col justify-start items-center w-screen h-[300px] bg-indigo-600">
                <h2 className="text-white text-4xl font-black">GAMES</h2>
                {/* Slider component that shows off the games */}
            </section>
            <section id="about-section" className="relative flex flex-col justify-start items-center w-screen h-[600px] bg-black text-white">
                <div id="about-wrapper" className="flex justify-center items-start w-full h-full">
                    <div id="about-content" className="flex flex-col max-w-[65%] text-center py-24 gap-y-8">
                        <h2 className="text-4xl font-black">DogHouse Games</h2>
                        <p className="text-xl text-">
                            This is text referring to all of the great things about DogHouse Games, 
                            where we're stationed, and what we have to offer.
                        </p>
                        <button className="w-full h-[50px] bg-transparent hover:bg-white hover:text-black border-2 border-white text-white uppercase font-bold transition-all duration-100 ease-in-out">Our Team</button>
                    </div>
                </div>
            </section>
            <section id="news-section" className="relative flex flex-col items-center w-screen h-auto p-8">
                <div id="news-header" className="flex flex-col w-full h-auto justify-center items-center uppercase text-white gap-y-8">
                    <h2 className="text-4xl font-black">Latest news</h2>
                    <button className="w-[200px] h-[50px] bg-transparent hover:bg-white hover:text-black border-2 border-white text-white uppercase font-bold transition-all duration-100 ease-in-out">Our Team</button>
                </div>
                {/* Component where we can just plug in a list.map */}
                <div id="news-articles" className="">

                </div>
            </section>
            <section id="publishing-section" className="flex flex-col items-center p-12 w-screen h-[400px] bg-sky-500">
                <div id="publishing-text" className="flex flex-col text-center w-fit h-fit text-white">
                    <h2 className="font-black text-[3.5rem] ">PUBLISHING</h2>
                    <div id="smaller-text" className="flex flex-row items-end justify-center w-full h-fit gap-x-2">
                        <p className="sm:-translate-y-[0px] -translate-y-[2px]">with</p>
                        <h2 className="font-bold text-2xl">DogHouse Studios</h2>
                    </div>
                </div>
                <div id="publishing-button" className="w-full h-auto">
                    <button className="w-full h-[100px] bg-transparent hover:bg-white hover:text-black text-[1.25rem] border-2 border-white text-white uppercase font-black transition-all duration-100 ease-in-out mt-12">SUBMIT YOUR GAME</button>
                </div>
            </section>
            <section id="newsletter-section" className="flex justify-center items-center w-screen h-[300px] bg-green-500 px-4 py-12">
                <div id="newsletter-wrapper" className="flex flex-col w-full h-full gap-y-4">
                    <h2 className="text-2xl font-black text-white uppercase w-[200px]">Join our newsletter</h2>
                    <p className="text-lg text-white w-[250px]">Be the first to get the latest news on your favorite games.</p>
                    {/* Input label design for newsletter mockup */}
                </div>
            </section>
            <footer id="footer-section" className="flex flex-col w-screen h-auto justify-center items-center p-8 gap-y-4 text-white">
                <div id="footer-logo" className="w-[250px] h-[100px] bg-indigo-600" />
                <div id="footer-links" className="flex flex-col">
                    <h2 className="text-lg font-black uppercase">Connect with us</h2>
                    <div id="links" className="">
                        {/* Logos for social media */}
                    </div>
                </div>
                <div id="footer-newsletter" className="">
                    {/* Input label design for newsletter mockup */}
                </div>
            </footer>
        </main>
    )
}

export default Home