"use client";

import { useState } from "react";
import Link from "next/link";

// components
import {
    Button,
    Row,
    Column,
    SidebarDivider,
    SidebarClip,
    Label,
} from "@/components/ui";

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
    return (
        <>
            <div className="w-full transition-all lg:!sticky lg:top-28 lg:max-w-xs lg:self-start 2xl:max-w-sm">
                <div className="relative w-full overflow-hidden bg-zinc-900 px-6 py-6 lg:px-8">
                    {/* card clip */}
                    <SidebarClip />

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
                                <Label>Net Apy</Label>
                                <h2 className="mt-4 text-base font-semibold 2xl:text-lg">
                                    {sidebarData?.net_apy}%
                                </h2>
                            </div>
                            <SidebarDivider />
                            <div className="py-4">
                                <Label>Supply Balance</Label>
                                <h2 className="mt-4 text-base font-semibold 2xl:text-lg">
                                    ${sidebarData?.supply_balance}
                                </h2>
                            </div>
                            <SidebarDivider />
                            <div className="py-4">
                                <Label>Borrow Balance</Label>
                                <h2 className="mt-4 text-base font-semibold 2xl:text-lg">
                                    ${sidebarData?.borrow_balance}
                                </h2>
                            </div>
                            <SidebarDivider />
                            <div className="py-4">
                                <Row className="items-center">
                                    <Column className="w-1/2">
                                        <Label>Borrow Limit</Label>
                                    </Column>
                                    <Column className="w-1/2">
                                        <h2 className="w-full text-right text-base font-semibold 2xl:text-lg">
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
                                    <Label>HTM Booster</Label>
                                    <div className="flex items-center space-x-4">
                                        <Button className="before:bg-zinc-900 after:bg-zinc-900">
                                            +
                                        </Button>
                                        <Button className="before:bg-zinc-900 after:bg-zinc-900">
                                            -
                                        </Button>
                                    </div>
                                </div>
                                <h2 className="mt-4 text-base font-semibold 2xl:text-lg">
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

                <div className="relative mt-40 hidden lg:block">
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
        </>
    );
}
