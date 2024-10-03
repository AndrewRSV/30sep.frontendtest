// components
import { Section, Button, Row, Column } from "@/components/ui";
import { Sidebar } from "@/components/organisms";

// constants
import { sidebarData } from "@/constants";

export default function Home() {
    return (
        <>
            <Section id="home">
                <div className="container relative">
                    <Sidebar sidebarData={sidebarData} />
                </div>
            </Section>
        </>
    );
}
