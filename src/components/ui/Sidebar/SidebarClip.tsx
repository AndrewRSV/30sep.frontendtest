export default function SidebarClip() {
    return (
        <>
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
                <div className="absolute -left-12 -top-16 h-20 w-28 -rotate-45 bg-black"></div>

                <div className="absolute right-0 top-0 h-9 w-36 bg-black"></div>
                <div className="absolute -top-[72px] right-[99px] h-20 w-28 rotate-45 bg-black"></div>
                <div className="absolute -right-[57px] -top-[24px] h-20 w-28 rotate-45 bg-black"></div>

                <div className="absolute bottom-0 left-0 h-1 w-6 bg-purple-500" />
                <div className="absolute bottom-0 right-0 h-0.5 w-12 bg-green-900"></div>
            </div>
        </>
    );
}
