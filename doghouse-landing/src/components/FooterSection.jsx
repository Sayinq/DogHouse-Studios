import React from 'react'
import { Link } from '@nextui-org/react';

import doghouseLogo from '../assets/logos/doghouse_studios_logo.png';
import discordLogo from '../assets/logos/logo-discord.svg';
import steamLogo from '../assets/logos/logo-steam.svg';
import twitchLogo from '../assets/logos/logo-twitch.svg';
import youtubeLogo from '../assets/logos/logo-youtube.svg';
import twitterLogo from '../assets/logos/logo-twitter.svg';

const FooterSection = () => {
    return (
        <>
        <footer id="footer-section" className="flex flex-col w-screen h-auto justify-center items-center p-8 gap-y-4 text-white">
                <div id="footer-logo" className="flex flex-row items-center uppercase font-black w-[250px] h-[100px]">
                    <img src={doghouseLogo} className="w-28 h-28" />
                    <div className="flex flex-col text-start text-xl leading-[95%]">
                        <p>DogHouse</p>
                        <p>Studios</p>
                    </div>
                </div>
                <div id="footer-links" className="flex flex-col justify-center items-center gap-y-4">
                    <h2 className="text-lg font-black uppercase">Connect with us</h2>
                <div id="links" className="flex flex-row h-fit w-auto gap-x-4">
                    <Link href="www.steam.com">
                        <img id="steam" src={steamLogo} className="w-8 h-8" />
                    </Link>
                    <Link href="www.twitter.com">
                        <img id="twitter" src={twitterLogo} className="w-8 h-8" />
                    </Link>
                    <Link href="www.youtube.com">
                        <img id="youtube" src={youtubeLogo} className="w-8 h-8" />
                    </Link>
                    <Link href="www.twitch.com">
                        <img id="twitch" src={twitchLogo} className="w-8 h-8" />
                    </Link>
                    <Link href="www.discord.com" className="hover:grayscale">
                        <img id="discord" src={discordLogo} className="w-8 h-8" />
                    </Link>
                </div>
            </div>
            <div id="footer-newsletter" className="">
                    {/* Input label design for newsletter mockup */}
            </div>
        </footer>
        <div id="footer-copyrights" className="flex flex-col justify-center items-center w-screen h-[100px] bg-black text-zinc-500">
            <p>©2023 DogHouse Games. All rights reserved.</p>
            <div id="footer-policies" className="flex flex-row gap-x-8">
                <Link href="" className="text-zinc-500 hover:text-white">Privacy Policy</Link>
                <Link href="" className="text-zinc-500 hover:text-white">Terms of Service</Link>
            </div>
        </div>
        </>
    )
}

export default FooterSection