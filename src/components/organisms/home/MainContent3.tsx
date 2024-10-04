"use client";

import { useState } from "react";
import CountUp from "react-countup";

// components
import { Row, Column, Button, Label } from "@/components/ui";

// context
import { useMainContentContext } from "@/context/MainContent";

export default function MainContent3() {
    const { pageIndex, setPageIndex } = useMainContentContext();

    const [startAnimation, setStartAnimation] = useState<boolean>(false);

    const handleContent3Click = () => {
        if (pageIndex < 4 && startAnimation) {
            setPageIndex((state) => state + 1);
        }
    };

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
                        <Row>
                            <Column className="w-2/3">
                                <h2 className="scale-y-105 text-2xl font-semibold">
                                    <CountUp
                                        start={0}
                                        end={startAnimation ? 0.045571 : 0}
                                        duration={1.5}
                                        decimals={6}
                                    />{" "}
                                    <span className="text-[10px] uppercase leading-3 text-gray-600">
                                        EGLD
                                    </span>
                                </h2>
                            </Column>
                            <Column className="w-1/3 self-end">
                                <div className="flex justify-end">
                                    <Button
                                        color="white"
                                        onClick={() => setStartAnimation(true)}
                                    >
                                        Max
                                    </Button>
                                </div>
                            </Column>
                            <Column className="my-4 w-full">
                                <Label>Estimated Price</Label>
                            </Column>
                            <Column className="w-full">
                                <p className="text-sm">
                                    0.04502 Hegld = $ 1.75
                                </p>
                            </Column>
                            <Column className="mt-10 w-full">
                                <Button
                                    color="purple"
                                    onClick={handleContent3Click}
                                >
                                    Apply
                                </Button>
                            </Column>
                        </Row>
                    </>
                )}
            </div>
        </>
    );
}
