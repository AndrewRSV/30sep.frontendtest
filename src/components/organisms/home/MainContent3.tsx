// components
import { Row, Column } from "@/components/ui";

// context
import { useMainContentContext } from "@/context/MainContent";

export default function MainContent3() {
    const { pageIndex, setPageIndex, selectedAsset } = useMainContentContext();

    return (
        <>
            <div
                className={`relative w-full px-6 py-8 2xl:px-8 2xl:py-12 ${pageIndex < 3 && "!text-gray-600"}`}
            >
                <div className="mb-10">
                    <h3
                        className={`mb-5 text-xs font-medium ${pageIndex < 3 ? "text-gray-600" : "text-purple-500"}`}
                    >
                        3.0
                    </h3>
                    <h2 className="tracking-tight">Choose amount</h2>
                </div>

                {pageIndex >= 3 && (
                    <>
                        <div></div>
                    </>
                )}
            </div>
        </>
    );
}
