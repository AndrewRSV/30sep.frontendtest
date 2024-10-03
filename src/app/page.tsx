// components
import { Section } from "@/components/ui";
import { Sidebar, MainContent } from "@/components/organisms";

// constants
import { sidebarData } from "@/constants";

export default function Home() {
    return (
        <>
            <Section id="home">
                <div className="container relative">
                    <div className="flex w-full lg:space-x-10">
                        {/* sidebar */}
                        <Sidebar sidebarData={sidebarData} />

                        {/* main content */}
                        <main className="relative w-full">
                            <MainContent />
                        </main>
                    </div>
                </div>
            </Section>
        </>
    );
}
