interface LabelProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Label({ children, className }: LabelProps) {
    return (
        <>
            <h3
                className={`scale-y-105 text-[10px] font-medium uppercase leading-3 text-gray-600 2xl:text-xs ${className || ""}`}
            >
                {children}
            </h3>
        </>
    );
}
