"use client";

import { useState, useEffect } from "react";
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

    useEffect(() => {
        if (pageIndex == 1) {
            setStartAnimation(false);
        }
    }, [pageIndex]);

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
                        <div className="flex items-end justify-between">
                            <h2 className="scale-y-105 text-xl font-semibold">
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
                            <div className="flex justify-end">
                                <Button
                                    color="white"
                                    onClick={() => setStartAnimation(true)}
                                >
                                    Max
                                </Button>
                            </div>
                        </div>
                        <Row>
                            <Column className="my-4 w-full">
                                <Label>Estimated Price</Label>
                            </Column>
                            <Column className="w-full">
                                <p className="text-sm">
                                    0.04502 Hegld = $ 1.75
                                </p>
                            </Column>

                            {startAnimation && (
                                <Column className="mt-10 w-full">
                                    <Button
                                        color="purple"
                                        onClick={handleContent3Click}
                                    >
                                        Apply
                                    </Button>
                                </Column>
                            )}
                        </Row>
                    </>
                )}
            </div>
        </>
    );
}
