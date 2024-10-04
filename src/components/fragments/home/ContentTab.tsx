import { Dispatch, SetStateAction } from "react";

// icons
import { ArrowUturnDownIcon } from "@heroicons/react/24/outline";

interface MarketButtonProps {
    label: string;
    value: string;
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
}

const MarketButton: React.FC<MarketButtonProps> = ({
    label,
    value,
    activeTab,
    setActiveTab,
}) => {
    return (
        <div
            className="flex cursor-pointer items-center"
            onClick={() => setActiveTab(value)}
        >
            {activeTab == value && (
                <ArrowUturnDownIcon className="mr-2 h-3 min-w-3 text-green-600" />
            )}

            <h4
                className={`text-xs uppercase text-gray-600 ${
                    activeTab == value ? "text-white" : ""
                } transition-colors hover:text-white`}
            >
                {label}
            </h4>
        </div>
    );
};

export default MarketButton;
