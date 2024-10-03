"use client";

import { useState } from "react";
import Link from "next/link";

// components
import { Button, Row, Column, SidebarDivider } from "@/components/ui";

// icons
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
    ArrowUpIcon,
    ArrowUturnUpIcon,
    Bars2Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

interface SidebarData {
    net_apy: string;
    supply_balance: string;
    borrow_balance: string;
    borrow_limit: string;
    borrow_limit_used: string;
    htm_booster: string;
}

interface SidebarProps {
    sidebarData?: SidebarData;
}

export default function Sidebar({ sidebarData }: SidebarProps) {
    const [isSidebarShown, setIsSidebarShown] = useState(false);

    return (
        <>
            <div
                className={`w-full max-w-xs transition-all lg:translate-x-0 2xl:max-w-sm ${isSidebarShown ? "translate-x-0" : "hidden -translate-x-[120%] lg:block"}`}
            >
                <div className="relative w-full overflow-hidden bg-zinc-900 px-8 py-6">
                    {/* card clip */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
                        <div className="absolute -left-12 -top-16 h-20 w-28 -rotate-45 bg-black"></div>

                        <div className="absolute right-0 top-0 h-9 w-36 bg-black"></div>
                        <div className="absolute -top-[72px] right-[99px] h-20 w-28 rotate-45 bg-black"></div>
                        <div className="absolute -right-[57px] -top-[24px] h-20 w-28 rotate-45 bg-black"></div>

                        <div className="absolute bottom-0 left-0 h-1 w-6 bg-purple-500" />
                        <div className="absolute bottom-0 right-0 h-0.5 w-12 bg-green-900"></div>
                    </div>

                    <div className="absolute right-3 top-0 z-10">
                        <Button>View Analytics</Button>
                    </div>

                    {/* content */}
                    <div className="relative w-full text-xs text-white 2xl:text-sm">
                        <div className="flex items-center space-x-3">
                            <SparklesIcon className="h-4 w-4 text-purple-500" />
                            <h2 className="text-base font-semibold">
                                My Position
                            </h2>
                        </div>

                        <div className="my-3">
                            <div className="py-4">
                                <h3 className="scale-y-105 text-xs font-medium uppercase text-gray-600">
                                    Net Apy
                                </h3>
                                <h2 className="mt-4 text-lg font-semibold">
                                    {sidebarData?.net_apy}%
                                </h2>
                            </div>
                            <SidebarDivider />
                            <div className="py-4">
                                <h3 className="scale-y-105 text-xs font-medium uppercase text-gray-600">
                                    Supply Balance
                                </h3>
                                <h2 className="mt-4 text-lg font-semibold">
                                    ${sidebarData?.supply_balance}
                                </h2>
                            </div>
                            <SidebarDivider />
                            <div className="py-4">
                                <h3 className="scale-y-105 text-xs font-medium uppercase text-gray-600">
                                    Borrow Balance
                                </h3>
                                <h2 className="mt-4 text-lg font-semibold">
                                    ${sidebarData?.borrow_balance}
                                </h2>
                            </div>
                            <SidebarDivider />
                            <div className="py-4">
                                <Row className="items-center">
                                    <Column className="w-1/2">
                                        <h3 className="scale-y-105 text-xs font-medium uppercase text-gray-600">
                                            Borrow Limit
                                        </h3>
                                    </Column>
                                    <Column className="w-1/2">
                                        <h2 className="w-full text-right text-lg font-semibold">
                                            ${sidebarData?.borrow_limit}
                                        </h2>
                                    </Column>
                                </Row>

                                <div className="mt-5">
                                    <p className="text-xs">
                                        {sidebarData?.borrow_limit_used}%{" "}
                                        <span className="uppercase text-gray-600">
                                            used
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <SidebarDivider />
                            <div className="py-4">
                                <div className="flex w-full items-center justify-between">
                                    <h3 className="scale-y-105 text-xs font-medium uppercase text-gray-600">
                                        HTM Booster
                                    </h3>
                                    <div className="flex items-center space-x-4">
                                        <Button className="before:bg-zinc-900 after:bg-zinc-900">
                                            +
                                        </Button>
                                        <Button className="before:bg-zinc-900 after:bg-zinc-900">
                                            -
                                        </Button>
                                    </div>
                                </div>
                                <h2 className="mt-4 text-lg font-semibold">
                                    ${sidebarData?.htm_booster}
                                </h2>
                                <p className="mt-2 text-xs">
                                    <span className="text-gray-500">
                                        3.55 HTM
                                    </span>{" "}
                                    <span className="mx-2 font-semibold text-green-600">
                                        0.5%
                                    </span>
                                    <ArrowUpIcon className="inline-block h-3 w-3 text-green-600" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-40">
                    <Link href="#" className="group cursor-pointer">
                        <div className="flex items-center space-x-6 p-3 text-gray-600 group-hover:text-white">
                            <ArrowUturnUpIcon className="h-5 w-5 rotate-90" />
                            <h6 className="text-xs uppercase transition-colors group-hover:text-white">
                                Terms & Conditions
                            </h6>
                        </div>
                    </Link>
                    <Link href="#" className="group cursor-pointer">
                        <div className="flex items-center space-x-6 p-3 text-gray-600 group-hover:text-white">
                            <ArrowUturnUpIcon className="h-5 w-5 rotate-90" />
                            <h6 className="text-xs uppercase transition-colors group-hover:text-white">
                                Documentation
                            </h6>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="fixed left-1 top-20 z-20 lg:hidden">
                <button
                    className="group rounded-r-md bg-gray-800/60 p-2 transition-colors hover:bg-gray-600/60"
                    onClick={() => setIsSidebarShown((state) => !state)}
                >
                    {isSidebarShown ? (
                        <XMarkIcon className="transition-color h-5 w-5 text-gray-400 group-hover:text-white" />
                    ) : (
                        <Bars2Icon className="transition-color h-5 w-5 text-gray-400 group-hover:text-white" />
                    )}
                </button>
            </div>
        </>
    );
}
