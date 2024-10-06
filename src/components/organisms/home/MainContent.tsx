"use client";

// components
import { Row, Column } from "@/components/ui";
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
                <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
                    <div className="absolute -left-12 -top-16 h-20 w-28 -rotate-45 border-b-2 border-gray-900/60 bg-black"></div>
                </div>
                <Row className="flex-nowrap divide-x-2 divide-gray-900/60 overflow-hidden lg:min-h-screen">
                    <Column
                        className={`w-full overflow-hidden transition-all duration-1000 lg:w-3/12 ${!selectedAsset && pageIndex == 1 && "lg:!w-6/12"} ${selectedAsset && pageIndex > 1 && "!w-0 lg:!w-3/12"}`}
                    >
                        <MainContent1 assetData={assetData} />
                    </Column>
                    <Column
                        className={`w-0 overflow-hidden transition-all duration-1000 lg:w-2/12 ${selectedAsset && pageIndex == 2 && "!w-full lg:!w-5/12"} ${selectedAsset && pageIndex > 2 && "!w-0 lg:!w-3/12"}`}
                    >
                        <MainContent2 />
                    </Column>
                    <Column
                        className={`w-0 overflow-hidden transition-all duration-1000 lg:w-2/12 ${selectedAsset && pageIndex == 3 && "!w-full lg:!w-4/12"} ${selectedAsset && pageIndex > 3 && "!w-0 lg:!w-3/12"}`}
                    >
                        <MainContent3 />
                    </Column>
                    <Column
                        className={`w-0 overflow-hidden transition-all duration-1000 lg:w-2/12 ${selectedAsset && pageIndex == 4 && "!w-full lg:!w-3/12"}`}
                    >
                        <MainContent4 />
                    </Column>
                </Row>
            </div>
        </>
    );
}
