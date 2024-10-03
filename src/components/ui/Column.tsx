interface ColumnProps {
    className?: string;
    children?: React.ReactNode;
}

export default function Column({ className, children }: ColumnProps) {
    return (
        <div className={`max-w-full flex-shrink ${className || ""}`}>
            {children}
        </div>
    );
}
