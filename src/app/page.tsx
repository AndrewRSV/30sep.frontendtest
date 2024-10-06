// components
import { Section } from "@/components/ui";
import { Sidebar, MainContent } from "@/components/organisms";

// constants
import { sidebarData } from "@/constants";

// context
import { MainContextProvider } from "@/context/MainContent";

export default function Home() {
    return (
        <MainContextProvider>
            <Section id="home">
                <div className="container relative">
                    <div className="flex w-full flex-col space-y-10 lg:flex-row lg:space-x-5 lg:space-y-0">
                        {/* sidebar */}
                        <Sidebar sidebarData={sidebarData} />

                        {/* main content */}
                        <main className="relative w-full">
                            <MainContent />
                        </main>
                    </div>
                </div>
            </Section>
        </MainContextProvider>
    );
}
