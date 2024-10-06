// components
import { Row, Column, Button, Label } from "@/components/ui";

// context
import { useMainContentContext } from "@/context/MainContent";

export default function MainContent4() {
    const { pageIndex, setPageIndex, setSelectedAsset } =
        useMainContentContext();

    const handleContent4Click = () => {
        if (pageIndex < 5) {
            setPageIndex(1);
            setSelectedAsset(null);
        }
    };

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

                {pageIndex >= 4 && (
                    <Row className="">
                        <Column className="w-full">
                            <Button color="purple">View on Explorer</Button>
                        </Column>
                        <Column className="my-5 flex w-full justify-end">
                            <div className="flex flex-col items-end">
                                <Button className="block">Max</Button>
                                <h4 className="text-right text-sm">
                                    Awaiting for network response{" "}
                                    <span className="inline-block aspect-square h-2 w-2 rounded-full bg-green-600" />
                                </h4>
                            </div>
                        </Column>
                        <Column className="w-full">
                            <Label>Status</Label>
                            <h4 className="text-sm">Sent</h4>
                        </Column>
                        <Column className="mb-2 mt-3 w-full">
                            <Label>TX Hash</Label>
                            <h4 className="text-sm">
                                Qxf99760xf9...14a8scl230dx
                            </h4>
                        </Column>
                        <Column className="w-full">
                            <div className="flex justify-end">
                                <Button color="yellow">Q</Button>
                            </div>
                        </Column>

                        <Column className="mt-10 w-full">
                            <Button onClick={handleContent4Click}>
                                Complete
                            </Button>
                        </Column>
                    </Row>
                )}
            </div>
        </>
    );
}
