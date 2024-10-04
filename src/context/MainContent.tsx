"use client";

import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    useContext,
} from "react";

interface AssetType {
    id?: number;
    name?: string;
    currency?: string;
    apy?: string;
    wallet?: string;
    collateral?: string;
    supply_apy?: string;
    htm_booster_apy?: string;
    net_apy?: string;
}

interface MainContentContextProps {
    selectedAsset: AssetType | null;
    setSelectedAsset: Dispatch<SetStateAction<AssetType | null>>;
    pageIndex: number;
    setPageIndex: Dispatch<SetStateAction<number>>;
}

interface MainContextProviderProps {
    children: ReactNode;
}

export const MainContentContext = createContext<
    MainContentContextProps | undefined
>(undefined);

const MainContextProvider = ({ children }: MainContextProviderProps) => {
    const [selectedAsset, setSelectedAsset] = useState<AssetType | null>(null);
    const [pageIndex, setPageIndex] = useState<number>(1);

    return (
        <MainContentContext.Provider
            value={{ selectedAsset, setSelectedAsset, pageIndex, setPageIndex }}
        >
            {children}
        </MainContentContext.Provider>
    );
};

const useMainContentContext = () => {
    const context = useContext(MainContentContext);
    if (!context) {
        throw new Error("Error while using context");
    }
    return context;
};

export { MainContextProvider, useMainContentContext };
