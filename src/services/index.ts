export const getRandomColor = () => {
    const colors = [
        "bg-green-600",
        "bg-blue-600",
        "bg-cyan-500",
        "bg-yellow-400",
        "bg-red-800",
        "bg-cyan-200",
        "bg-purple-500",
        "bg-white",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};
