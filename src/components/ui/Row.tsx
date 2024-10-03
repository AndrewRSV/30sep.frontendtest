interface RowProps {
    className?: string;
    children?: React.ReactNode;
}

export default function Row({ className, children }: RowProps) {
    return (
        <div className={`flex flex-row flex-wrap ${className || ""}`}>
            {children}
        </div>
    );
}
