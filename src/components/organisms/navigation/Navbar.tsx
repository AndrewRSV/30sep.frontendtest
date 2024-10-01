"use client";

import { usePathname } from "next/navigation";

// icons
import { ChevronDownIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

// constants
import { navigation } from "@/constants";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            <div className="fixed left-0 top-0 z-50 w-full">
                <div className="flex items-center px-5 py-10 xl:px-10">
                    <div className="-mt-1.5 w-[12rem]">
                        <div className="mb-3 h-0.5 w-full bg-gray-100/20" />
                        <div className="flex items-center">
                            <img
                                src="/images/hatom-logo.png"
                                className="h-[34px] w-[34px]"
                                alt="Hatom Logo"
                            />
                            <h1 className="ml-3 hidden text-base font-semibold uppercase tracking-wider text-white 2xl:block">
                                Hatom
                            </h1>
                        </div>
                    </div>

                    <nav className="">
                        <div className="z-2 relative m-auto flex flex-col items-center justify-center lg:flex-row">
                            {navigation.map((navItem) => {
                                let bgColor;
                                let textColor;
                                switch (navItem.element_color) {
                                    case "green-600":
                                        bgColor = "bg-green-600";
                                        textColor = "text-green-600";
                                        break;
                                    case "blue-600":
                                        bgColor = "bg-blue-600";
                                        textColor = "text-blue-600";
                                        break;
                                    case "cyan-500":
                                        bgColor = "bg-cyan-500";
                                        textColor = "text-cyan-500";
                                        break;
                                    case "yellow-400":
                                        bgColor = "bg-yellow-400";
                                        textColor = "text-yellow-400";
                                        break;
                                    case "red-800":
                                        bgColor = "bg-red-800";
                                        textColor = "text-red-800";
                                        break;
                                    default:
                                        bgColor = "bg-white";
                                        textColor = "text-white";
                                        break;
                                }

                                return (
                                    <div className="relative overflow-hidden lg:w-[8rem] xl:w-[12rem]">
                                        <div className="mb-3 h-0.5 w-full bg-gray-100/20">
                                            <div
                                                className={`h-0.5 ${navItem.active ? "w-[70%]" : "w-[3%]"} ${bgColor}`}
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            {!navItem.has_icon && (
                                                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-[40%] border border-gray-700 bg-gray-800">
                                                    <div
                                                        className={`h-2 w-2 rounded-full ${bgColor}`}
                                                    />
                                                </div>
                                            )}

                                            <a
                                                key={navItem.id}
                                                href={navItem.url}
                                                className="relative block py-3 text-2xl font-semibold uppercase text-gray-400 transition-colors hover:text-white lg:text-xs"
                                            >
                                                {navItem.title}
                                            </a>
                                            {navItem.has_icon && (
                                                <ChevronDownIcon
                                                    className={`ml-2 inline-block h-3 w-3 font-semibold ${textColor}`}
                                                />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </nav>

                    <div className="flex-1 self-start">
                        <div className="mb-3 h-0.5 w-full bg-gray-100/20" />
                    </div>

                    <div className="relative lg:w-[8rem] xl:w-[12rem]">
                        <div className="mb-3 h-0.5 w-full bg-gray-100/20" />
                        <div className="flex items-center">
                            <div className="rounded-full border border-gray-700 px-3 py-0.5">
                                <span className="text-xs text-gray-400">
                                    V1
                                </span>
                            </div>
                            <img
                                src="/images/multiversx-logo.png"
                                className="mx-3 inline-block h-4 w-4"
                                alt="MultiversX"
                            />
                            <a
                                href="#"
                                className="lg:-mr-0.25 lg:hover:text-n-1 relative block py-3 text-2xl font-semibold uppercase text-gray-400 transition-colors hover:text-white lg:text-xs"
                            >
                                MultiversX
                            </a>
                        </div>
                    </div>
                    <div className="relative w-[3rem]">
                        <div className="-mt-4 mb-3 h-0.5 w-full bg-gray-100/20" />
                        <button className="ml-auto block cursor-pointer">
                            <Cog6ToothIcon className="-mb-2 ml-2 inline-block h-6 w-6 rotate-90 font-semibold text-gray-400 transition-colors hover:text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
