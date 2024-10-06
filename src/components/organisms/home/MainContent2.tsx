"use client";

import { useState } from "react";

// components
import { Row, Column, Label, Button } from "@/components/ui";
import { ContentTab } from "@/components/fragments";

// context
import { useMainContentContext } from "@/context/MainContent";

// icons
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function MainContent2() {
    const { pageIndex, setPageIndex, selectedAsset } = useMainContentContext();

    const [activeMarket, setActiveMarket] = useState<string>("supply");

    const handleContent2Click = () => {
        if (pageIndex < 3) {
            setPageIndex((state) => state + 1);
        }
    };

    return (
        <>
            <div
                className={`relative w-full px-6 py-8 2xl:px-8 2xl:py-12 ${pageIndex < 2 && "!text-gray-600"}`}
            >
                <div className="mb-10">
                    <h3
                        className={`mb-5 text-xs font-medium ${pageIndex < 2 ? "text-gray-600" : "text-yellow-400"}`}
                    >
                        2.0
                    </h3>
                    <h2 className="tracking-tight">Choose an action</h2>
                </div>

                {pageIndex >= 2 && (
                    <>
                        <div className="mb-5 flex items-center space-x-3">
                            <ContentTab
                                label="Supply"
                                value="supply"
                                activeTab={activeMarket}
                                setActiveTab={setActiveMarket}
                            />
                            <ContentTab
                                label="Withdraw"
                                value="withdraw"
                                activeTab={activeMarket}
                                setActiveTab={setActiveMarket}
                            />
                            <ContentTab
                                label="Collateral"
                                value="collateral"
                                activeTab={activeMarket}
                                setActiveTab={setActiveMarket}
                            />
                        </div>

                        <Row>
                            <Column className="w-2/3">
                                <Label>Supply Rates</Label>
                                <div className="mt-2 flex items-center">
                                    <div className="mr-3 flex h-4 w-4 items-center justify-center rounded-[40%] border border-gray-700 bg-gray-800 transition-colors group-hover:bg-gray-700">
                                        <div className="h-2 w-2 rounded-full bg-green-600" />
                                    </div>
                                    <h3 className="text-xs uppercase leading-3 2xl:text-sm">
                                        Supply APY
                                    </h3>
                                </div>
                            </Column>
                            <Column className="w-1/3 self-end">
                                <h3 className="w-full text-right text-xs leading-3 2xl:text-sm">
                                    {selectedAsset?.supply_apy}%
                                </h3>
                            </Column>

                            <Column className="my-4 w-full" />

                            <Column className="w-2/3">
                                <div className="flex items-center space-x-2">
                                    <CurrencyDollarIcon className="inline-block h-4 w-4 text-blue-600" />
                                    <Label>HTM Booster APY</Label>
                                </div>
                            </Column>
                            <Column className="w-1/3">
                                <h3 className="w-full text-right text-xs leading-3 2xl:text-sm">
                                    {selectedAsset?.htm_booster_apy}%
                                </h3>
                            </Column>

                            <Column className="my-1 w-full" />

                            <Column className="w-2/3">
                                <div className="flex items-center space-x-2">
                                    <CurrencyDollarIcon className="inline-block h-4 w-4 text-blue-600" />
                                    <Label>Net APY</Label>
                                </div>
                            </Column>
                            <Column className="w-1/3">
                                <h3 className="w-full text-right text-xs leading-3 2xl:text-sm">
                                    {selectedAsset?.net_apy}%
                                </h3>
                            </Column>

                            <Column className="my-3 w-full" />

                            <Column className="w-full">
                                <div className="flex space-x-2">
                                    <div className="mt-0.5 flex h-3 min-w-5 space-x-1 overflow-hidden rounded">
                                        <div className="h-full w-0.5 rotate-45 bg-yellow-400" />
                                        <div className="h-full w-0.5 rotate-45 bg-yellow-400" />
                                        <div className="h-full w-0.5 rotate-45 bg-yellow-400" />
                                        <div className="h-full w-0.5 rotate-45 bg-yellow-400" />
                                        <div className="h-full w-0.5 rotate-45 bg-yellow-400" />
                                    </div>
                                    <p className="text-xs font-light">
                                        You only earn rewards APY on the tokens
                                        used as a{" "}
                                        <span className="text-yellow-400">
                                            collateral.
                                        </span>
                                    </p>
                                </div>
                            </Column>

                            <Column className="my-3 w-full" />

                            <Column className="w-full">
                                <Button
                                    color="yellow"
                                    onClick={handleContent2Click}
                                >
                                    Continue
                                </Button>
                            </Column>
                        </Row>
                    </>
                )}
            </div>
        </>
    );
}
