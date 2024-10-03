"use client";

import { useState } from "react";

// icons
import {
    ChevronDownIcon,
    Cog6ToothIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

// constants
import { navigation } from "@/constants";

export default function Navbar() {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation((state) => !state);
    };

    const handleClick = () => {
        if (!openNavigation) return;
        setOpenNavigation(false);
    };

    return (
        <>
            <div className="fixed left-0 top-0 z-50 w-full bg-black/20 lg:backdrop-blur-sm">
                <div className="px-5 py-5 2xl:px-10">
                    <div className="relative flex items-center">
                        <div className="absolute inset-x-0 top-0 z-10 hidden lg:block">
                            <div className="mb-3 h-0.5 w-full bg-gray-100/20" />
                        </div>
                        <div className="w-[10rem]">
                            <div className="flex items-center">
                                <img
                                    src="/images/hatom-logo.png"
                                    className="h-[34px] min-w-[34px]"
                                    width={34}
                                    height={34}
                                    alt="Hatom Logo"
                                />
                                <h1 className="ml-3 text-base font-semibold uppercase tracking-wider text-white">
                                    Hatom
                                </h1>
                            </div>
                        </div>

                        <nav
                            className={`${
                                openNavigation ? "flex" : "hidden"
                            } fixed inset-x-0 bottom-0 top-[4.75rem] bg-black/90 lg:static lg:flex lg:bg-transparent`}
                        >
                            <div className="relative m-auto flex flex-col items-center justify-center lg:flex-row">
                                {navigation.map((navItem) => {
                                    let bgColor;
                                    let textColor;

                                    const givenColor = navItem.element_color;

                                    if (givenColor == "green-600") {
                                        bgColor = "bg-green-600";
                                        textColor = "text-green-600";
                                    } else if (givenColor == "blue-600") {
                                        bgColor = "bg-blue-600";
                                        textColor = "text-blue-600";
                                    } else if (givenColor == "cyan-500") {
                                        bgColor = "bg-cyan-500";
                                        textColor = "text-cyan-500";
                                    } else if (givenColor == "yellow-400") {
                                        bgColor = "bg-yellow-400";
                                        textColor = "text-yellow-400";
                                    } else if (givenColor == "red-800") {
                                        bgColor = "bg-red-800";
                                        textColor = "text-red-800";
                                    } else if (givenColor == "cyan-200") {
                                        bgColor = "bg-cyan-200";
                                        textColor = "text-cyan-200";
                                    } else if (givenColor == "purple-500") {
                                        bgColor = "bg-purple-500";
                                        textColor = "text-purple-500";
                                    } else {
                                        bgColor = "bg-white";
                                        textColor = "text-white";
                                    }

                                    return (
                                        <div
                                            key={navItem.id}
                                            className={`group relative cursor-pointer lg:w-[8rem] 2xl:w-[10rem] ${navItem.is_mobile ? "lg:hidden" : ""} `}
                                            onClick={handleClick}
                                            title={navItem.title}
                                        >
                                            <div className="absolute inset-x-0 top-0 z-20 hidden lg:block">
                                                <div
                                                    className={`h-0.5 ${navItem.active ? "w-[70%]" : "w-[3%]"} ${bgColor}`}
                                                />
                                            </div>
                                            <div className="flex items-center py-3 lg:py-6">
                                                <div className="mr-3 flex h-4 w-4 items-center justify-center rounded-[40%] border border-gray-700 bg-gray-800 transition-colors group-hover:bg-gray-700">
                                                    <div
                                                        className={`h-2 w-2 rounded-full ${bgColor}`}
                                                    />
                                                </div>

                                                <a
                                                    href={navItem.url}
                                                    className="relative block overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-semibold uppercase leading-3 text-gray-400 transition-colors group-hover:text-white 2xl:text-xs"
                                                >
                                                    {navItem.title}
                                                </a>

                                                {navItem.id == "5" && (
                                                    <ChevronDownIcon
                                                        className={`ml-2 inline-block h-3 w-3 font-semibold ${textColor} hidden lg:block`}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </nav>

                        <div className="ml-auto hidden items-center lg:flex">
                            <div
                                className="group relative cursor-pointer lg:w-[8rem] 2xl:w-[10rem]"
                                title="MultiversX"
                            >
                                <div className="flex items-center py-6">
                                    <img
                                        src="/images/multiversx-logo.png"
                                        className="mx-3 inline-block h-4 w-4"
                                        alt="MultiversX"
                                    />
                                    <a
                                        href="#"
                                        className="relative block overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-semibold uppercase leading-3 text-gray-400 transition-colors group-hover:text-white 2xl:text-xs"
                                    >
                                        MultiversX
                                    </a>
                                </div>
                            </div>
                            <div
                                className="group relative cursor-pointer lg:w-[8rem] 2xl:w-[10rem]"
                                title="QXF9976QXF914A8"
                            >
                                <div className="flex items-center py-6">
                                    <div className="mr-3 flex h-4 w-4 items-center justify-center rounded-[40%] border border-gray-700 bg-gray-800 group-hover:bg-gray-700">
                                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                                    </div>
                                    <a
                                        href="#"
                                        className="relative block overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-semibold uppercase leading-3 text-gray-400 transition-colors group-hover:text-white 2xl:text-xs"
                                    >
                                        QXF9976QXF914A8
                                    </a>
                                </div>
                            </div>
                            <div
                                className="group relative w-[3rem] cursor-pointer"
                                title="Settings"
                            >
                                <button className="ml-auto block">
                                    <Cog6ToothIcon className="ml-2 inline-block h-5 w-5 rotate-90 font-semibold text-gray-400 transition-colors group-hover:text-white" />
                                </button>
                            </div>
                        </div>

                        <button
                            className="ml-auto lg:hidden"
                            onClick={toggleNavigation}
                        >
                            {openNavigation ? (
                                <XMarkIcon className="h-8 w-8 text-gray-400" />
                            ) : (
                                <Bars3BottomRightIcon className="h-8 w-8 text-gray-400" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
