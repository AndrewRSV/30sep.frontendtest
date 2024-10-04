"use client";

import { useState } from "react";

// components
import { Button, Row, Column, Label } from "@/components/ui";
import { ContentTab } from "@/components/fragments";

// icons
import {
    ChevronDownIcon,
    CurrencyDollarIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/outline";

// context
import { useMainContentContext } from "@/context/MainContent";

// services
import { getRandomColor } from "@/services";

interface MainContent1Props {
    assetData: any[];
}

export default function MainContent1({ assetData }: MainContent1Props) {
    const { selectedAsset, setSelectedAsset, pageIndex, setPageIndex } =
        useMainContentContext();

    const [activeMarket, setActiveMarket] = useState<string>("supply_market");

    const handleAssetClick = (id: number) => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        const findMatchedAsset = assetData.find((asset) => asset.id == id);
        console.log(findMatchedAsset);
        setSelectedAsset(findMatchedAsset);
        if (pageIndex < 2) {
            setPageIndex((state) => state + 1);
        }
    };

    const handleAssetEditClick = () => {
        setSelectedAsset(null);
        setPageIndex(1);
    };

    return (
        <>
            <div className="relative w-full px-6 py-8 2xl:px-8 2xl:py-12">
                <div className="mb-10">
                    <div className="mb-5 flex items-center justify-between">
                        <h3 className="text-xs font-medium text-blue-600">
                            1.0
                        </h3>
                        {selectedAsset && (
                            <Button
                                color="white"
                                onClick={handleAssetEditClick}
                            >
                                Edit
                            </Button>
                        )}
                    </div>
                    <h2 className="tracking-tight">Choose an asset</h2>
                </div>

                {!selectedAsset && (
                    <>
                        <Row className="-mx-2">
                            <Column className="w-3/12 px-2">
                                <ContentTab
                                    label="Supply Markets"
                                    value="supply_market"
                                    activeTab={activeMarket}
                                    setActiveTab={setActiveMarket}
                                />
                            </Column>
                            <Column className="w-3/12 px-2">
                                <ContentTab
                                    label="Borrow Markets"
                                    value="borrow_market"
                                    activeTab={activeMarket}
                                    setActiveTab={setActiveMarket}
                                />
                            </Column>
                            <Column className="w-2/12 px-2" />
                            <Column className="w-3/12 px-2">
                                <div className="flex items-center justify-center space-x-2">
                                    <h4 className="text-xs uppercase">
                                        Sort By
                                    </h4>
                                    <ChevronDownIcon className="h-4 w-4 text-yellow-800" />
                                </div>
                            </Column>
                            <Column className="w-1/12 px-2" />
                        </Row>

                        <Row className="mb-3 mt-5">
                            <Column className="w-3/12">
                                <h3 className="scale-y-110 text-[10px] uppercase leading-3 text-gray-600">
                                    Asset
                                </h3>
                            </Column>
                            <Column className="w-3/12">
                                <h3 className="scale-y-110 text-center text-[10px] uppercase leading-3 text-gray-600">
                                    APY
                                </h3>
                            </Column>
                            <Column className="w-2/12">
                                <h3 className="scale-y-110 text-center text-[10px] uppercase leading-3 text-gray-600">
                                    Wallet
                                </h3>
                            </Column>
                            <Column className="w-3/12">
                                <h3 className="scale-y-110 text-center text-[10px] uppercase leading-3 text-gray-600">
                                    Collateral
                                </h3>
                            </Column>
                            <Column className="w-1/12"></Column>
                        </Row>

                        {assetData.map((assetItem) => {
                            const randomColor = getRandomColor();

                            return (
                                <div
                                    onClick={() =>
                                        handleAssetClick(assetItem.id)
                                    }
                                    key={assetItem.id}
                                >
                                    <Row className="group cursor-pointer border-b-2 border-gray-900/60 px-2 py-5 text-sm transition-all duration-300 ease-in-out hover:scale-95 hover:bg-gray-100/10">
                                        <Column className="w-3/12">
                                            <div className="flex items-center space-x-2">
                                                <div className="mr-3 flex h-4 w-4 items-center justify-center rounded-[40%] border border-gray-700 bg-gray-800 transition-colors group-hover:bg-gray-700">
                                                    <div
                                                        className={`h-2 w-2 rounded-full ${randomColor}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:space-x-2">
                                                    <h2>{assetItem.name} </h2>
                                                    <span className="inline-block text-[10px] font-medium uppercase leading-3 text-gray-600">
                                                        {assetItem.currency}
                                                    </span>
                                                </div>
                                            </div>
                                        </Column>
                                        <Column className="w-3/12">
                                            <p className="text-center">
                                                {assetItem.apy}%{" "}
                                                <CurrencyDollarIcon className="ml-1 inline-block h-4 w-4 text-blue-600" />
                                            </p>
                                        </Column>
                                        <Column className="w-2/12">
                                            <p className="text-center">
                                                {assetItem.wallet}
                                            </p>
                                        </Column>
                                        <Column className="w-3/12">
                                            <p className="text-center">
                                                {assetItem.collateral}
                                            </p>
                                        </Column>
                                        <Column className="mx-auto w-1/12">
                                            <Button
                                                className="px-1.5 opacity-0 group-hover:opacity-100"
                                                color="white"
                                            >
                                                <ArrowRightIcon className="h-2.5 w-2.5 text-white" />
                                            </Button>
                                        </Column>
                                    </Row>
                                </div>
                            );
                        })}
                    </>
                )}

                {selectedAsset && (
                    <Row className="">
                        <Column className="w-1/2">
                            <Label className="py-1">Supply APY</Label>
                        </Column>
                        <Column className="w-1/2">
                            <h4 className="py-1 text-right text-sm">
                                {selectedAsset.apy}{" "}
                                <CurrencyDollarIcon className="ml-1 inline-block h-4 w-4 text-blue-600" />
                            </h4>
                        </Column>
                        <Column className="w-1/2">
                            <Label className="py-1">Wallet</Label>
                        </Column>
                        <Column className="w-1/2">
                            <h4 className="py-1 text-right text-sm">
                                {selectedAsset.wallet}{" "}
                                <span className="uppercase">
                                    {selectedAsset.currency}
                                </span>
                            </h4>
                        </Column>
                        <Column className="w-1/2">
                            <Label className="py-1">Collateral</Label>
                        </Column>
                        <Column className="w-1/2">
                            <h4 className="py-1 text-right text-sm">
                                {selectedAsset.collateral}{" "}
                                <span className="uppercase">
                                    {selectedAsset.currency}
                                </span>
                            </h4>
                        </Column>
                    </Row>
                )}
            </div>
        </>
    );
}
