// context
import { useMainContentContext } from "@/context/MainContent";

export default function MainContent4() {
    const { pageIndex, setPageIndex, selectedAsset } = useMainContentContext();

    return (
        <>
            <div
                className={`relative w-full px-6 py-8 2xl:px-8 2xl:py-12 ${pageIndex < 4 && "!text-gray-600"}`}
            >
                <div className="mb-10">
                    <h3
                        className={`mb-5 text-xs font-medium ${pageIndex < 4 ? "text-gray-600" : "text-green-600"}`}
                    >
                        4.0
                    </h3>
                    <h2 className="tracking-tight">Transaction details</h2>
                </div>
            </div>
        </>
    );
}
