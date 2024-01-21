"use client";
import { TerminalSquare } from "lucide-react";
import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";

const Terminalcomp: React.FC = () => {
    const [input, setInput] = useState("");
    const [showHelp, setShowHelp] = useState(false);
    const [currentTime, setCurrentTime] = useState(getFormattedTime());

    useEffect(() => {
        if (typeof window !== "undefined") {
            const intervalId = setInterval(() => {
                setCurrentTime(getFormattedTime());
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (input.toLowerCase() === "help") {
                setShowHelp(true);
            } else {
                setShowHelp(false);
            }
        }
    };

    function getFormattedTime(): string {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const amPm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds}${amPm}`;
    }

    return (
        <div className="border-2 border-black/30 dark:border-white/30 rounded-lg h-[400px] p-4 overflow-y-auto w-full">
            <div className="flex justify-between mb-5 items-center sticky top-0 dark:bg-black bg-white">
                <div className="flex gap-3">
                    <div className="w-4 h-4 duration-200 cursor-pointer bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 duration-200 cursor-pointer bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 cursor-pointer duration-200 bg-green-500 rounded-full"></div>
                </div>
                <span className="border flex gap-3 font-medium text-sm border-white/30 rounded-lg p-2 justify-center items-center">
                    <TerminalSquare size={20} />
                    Zsh
                </span>
            </div>
            <h1 className="text-sm font-medium mb-3 opacity-70 tracking-wide">Welcome to my website! Get started by typing `help` command below</h1>
            <div>
                <div className="flex justify-between items-center text-md">
                    <div className="w-full">
                        <span className="mr-4">{">"}</span>
                        <input type="text" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} className="bg-transparent w-[80%] outline-none border-none focus:outline-none" />
                    </div>
                    <span className=" text-sm opacity-60">{currentTime}</span>
                </div>
            </div>

            {/* Conditional rendering for help information */}
            {showHelp && (
                <div className="mt-2 ">
                    <p className="text-sm font-medium opacity-70">Available commands:</p>
                    <ul className="text-sm font-medium tracking-wide flex flex-col gap-2">
                        <li className=" mt-2 flex gap-2 items-center">
                            who: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Displays a brief info about me</span>
                        </li>
                        <li className="flex items-center gap-2">
                            cal: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Displays calender</span>
                        </li>
                        <li className="flex items-center gap-2">
                            locate: <span className="text-green-800 dark:text-green-500 opacity-70 text-xs">Shows users location</span>
                        </li>
                        <li className="flex items-center gap-2">
                            nav: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Navigate across pages eg: nav /about will navigate to about page</span>
                        </li>
                        <li className="flex items-center gap-2">
                            clear: <span className=" text-green-800 dark:text-green-500 opacity-70 text-xs">Clears terminal</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Terminalcomp;
