interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    className?: string;
    type?: "button" | "submit";
    color?: "blue" | "yellow" | "purple";
}

export default function Button({
    onClick,
    children,
    className,
    type = "button",
    color = "blue",
}: ButtonProps) {
    const colors = {
        blue: "border-blue-400",
        yellow: "border-yellow-600",
        purple: "border-purple-500",
    };

    const addColor = color ? colors[color] : colors.blue;

    return (
        <>
            {onClick ? (
                <button
                    onClick={onClick}
                    type={type}
                    className={`before:content[''] relative inline-block cursor-pointer border-2 ${addColor} px-3 text-[10px] font-semibold uppercase leading-3 text-gray-400 transition-all duration-200 before:absolute before:-top-0.5 before:left-1/2 before:h-0.5 before:w-[calc(100%-8px)] before:-translate-x-1/2 before:bg-black after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-[calc(100%-8px)] after:-translate-x-1/2 after:bg-black after:content-[''] hover:scale-90 hover:ring-0 focus:outline-none focus:ring-0 2xl:text-xs ${className || ""}`}
                >
                    <div className="">{children}</div>
                </button>
            ) : (
                <button
                    type={type}
                    className={`before:content[''] relative inline-block cursor-pointer border-2 ${addColor} px-3 text-[10px] font-semibold uppercase leading-3 text-gray-400 transition-all duration-200 before:absolute before:-top-0.5 before:left-1/2 before:h-0.5 before:w-[calc(100%-8px)] before:-translate-x-1/2 before:bg-black after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-[calc(100%-8px)] after:-translate-x-1/2 after:bg-black after:content-[''] hover:scale-90 hover:ring-0 focus:outline-none focus:ring-0 2xl:text-xs ${className || ""}`}
                >
                    <div className="">{children}</div>
                </button>
            )}
        </>
    );
}
