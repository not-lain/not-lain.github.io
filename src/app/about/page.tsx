import React from "react";
export function generateMetadata() {
    return {
        title: "About - Hafedh",
        description: "Hi. I'm Hafedh Hichri, a machine learning engineer from Tunisia. I am a machine learning engineer and a huggingface fellow 🤗, I love building software that solves real world problems which is probably why everything I build is Open Source. My everyday tech stack includes transformers, PyTorch, TensorFlow, Pythons, ...",
        openGraph: {
            images: "https://cdn.discordapp.com/attachments/1079039236302446705/1207210027333718096/SHIVA_1.png?ex=65ded0f3&is=65cc5bf3&hm=c511a0d118dae42adfc43114877d0689863f328da2dcc78c02826d271a5cd27f&",
        },
    };
}
import { SiHuggingface } from "react-icons/si";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Info, MailPlus, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import aboutmemoji from "@/assets/about/confused-memoji.svg";
const AboutPage = () => {
    return (
        <section className=" p-4 w-full lg:max-w-[50%] lg:m-auto">
            <div className="flex flex-col gap-4">
                <h1 className=" text-3xl lg:text-5xl font-bold tracking-wide mt-7">
                    Hi. I&apos;m{" "}
                    <a href="https://twitter.com/not_so_lain" rel="noopener noreferrer" target="_blank" className=" text-balance text-blue-500">
                        @not_so_lain{" "}
                    </a>
                    🤗
                </h1>
                <Image src={aboutmemoji} alt="confused-memoji" height={160} width={160}></Image>
                <h2 className=" text-3xl flex gap-2 items-center font-bold tracking-wide">
                    <Info />
                    Short Bio
                </h2>
                <p className="text-md lg:text-2xl flex flex-col gap-2 whitespace-break-spaces font-normal">
                    <span>
                        Hey , stranger 👋 I&apos;m hafedh hichri, a machine learning engineer from Tunisia. I&apos;m a <span className=" text-[#FF9D00] font-bold">HuggingFace Fellow 🤗</span> that occasionally contributes to{" "}
                        <a href="https://github.com/not-lain" target="_blank" rel="noopener noreferrer" className=" text-[#dd59eb] font-bold ">
                            Open Source
                        </a>
                        .
                    </span>

                    <span>
                        My everyday tech stack includes <span className=" text-green-500 font-bold">transformers, PyTorch, TensorFlow, Python 🐍 </span>(the list goes long lol 🔋)
                    </span>
                    <span>
                        My Editor of choice is{" "}
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className=" text-lg text-blue-500 font-bold uppercase">
                            VSCODE
                        </a>{" "}
                        💻
                    </span>
                    <span>
                        I am <span className="font-bold text-[#54d0ec] ">actively looking</span> for new opportunities at the moment participant
                    </span>
                </p>
                <div className="flex justify-center flex-wrap gap-8 items-center mt-5 mb-5">
                    <Link href={"/#contact"} className="loadmorebtn flex justify-center items-center">
                        Leave A Message
                    </Link>
                    <Link href={"/projects"} className="loadmorebtn flex justify-center items-center">
                        Visit Projects
                    </Link>
                    <Link href="https://drive.google.com/file/d/1zsUNjEtlRsZCntwXTHq2QgAIVCX6_3vF/view?usp=sharing" className="loadmorebtn flex justify-center items-center" target="_blank">
                        Resume
                    </Link>
                </div>
                <h2 className=" text-3xl flex gap-2 items-center font-bold tracking-wide">
                    <Zap />
                    Lets Connect
                </h2>
                <div className="flex gap-2 flex-wrap mt-2 mb-2 items-center">
                    <a href="https://github.com/not-lain" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://twitter.com/not_so_lain" target="_blank" rel="noopener noreferrer">
                        <TwitterLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="mailto:hhichri60@gmail.com?body=Hello" target="_blank" rel="noopener noreferrer">
                        <MailPlus className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://instagram.com/not_so_lain" target="_blank" rel="noopener noreferrer">
                        <InstagramLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://huggingface.com/not-lain" target="_blank" rel="noopener noreferrer">
                        <SiHuggingface className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                </div>
                <p className=" text-md lg:text-2xl whitespace-break-spaces font-normal">
                    I&apos;m excited to connect with others via email (
                    <a href="mailto:hhichri60@gmail.com?body=Hello" rel="noopener noreferrer" target="_blank" className=" text-blue-500 italic font-bold">
                        hhichri60@gmail.com
                    </a>
                    ) and{" "}
                    <a href="https://twitter.com/not_so_lain" rel="noopener noreferrer" target="_blank" className="font-bold italic text-blue-500">
                        Twitter
                    </a>{" "}
                    to chat about projects and ideas. I&apos;m also contributing to open source projects and help the community a lot. So feel free to shoot me a message if you want to collaborate on an AI library or if you want have an opening and you think I&apos;m a good fit for it.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
