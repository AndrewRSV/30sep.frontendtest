"use client";

// components
import { Button, Row, Column } from "@/components/ui";
import {
    MainContent1,
    MainContent2,
    MainContent3,
    MainContent4,
} from "@/components/organisms";

// context
import { useMainContentContext } from "@/context/MainContent";

// constants
import { assetData } from "@/constants";

export default function MainContent() {
    const { selectedAsset, setSelectedAsset, pageIndex } =
        useMainContentContext();

    return (
        <>
            <div className="border-2 border-gray-900/60 text-white">
                <Row className="divide-x-2 divide-gray-900/60">
                    <Column
                        className={`w-3/12 transition-all duration-1000 ${!selectedAsset && pageIndex == 1 && "w-6/12"}`}
                    >
                        <MainContent1 assetData={assetData} />
                    </Column>
                    <Column
                        className={`w-2/12 transition-all duration-1000 ${selectedAsset && pageIndex == 2 && "w-5/12"} ${selectedAsset && pageIndex > 2 && "w-3/12"}`}
                    >
                        <MainContent2 />
                    </Column>
                    <Column
                        className={`w-2/12 transition-all duration-1000 ${selectedAsset && pageIndex == 3 && "w-4/12"} ${selectedAsset && pageIndex > 3 && "w-3/12"}`}
                    >
                        <MainContent3 />
                    </Column>
                    <Column
                        className={`w-2/12 transition-all duration-1000 ${selectedAsset && pageIndex == 4 && "w-3/12"}`}
                    >
                        <MainContent4 />
                    </Column>
                </Row>
            </div>
        </>
    );
}
