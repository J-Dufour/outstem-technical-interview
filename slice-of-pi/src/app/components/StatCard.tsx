import React from "react";

interface StatCardProps {
    title: string,
    children: React.ReactElement
}

export default function StatCard({ title, children }: StatCardProps) {

    return (
        <div className="w-fit px-2 py-4 m-4 bg-yellow-600 rounded-lg hover:scale-105 transition ease-in-out duration-700">
            <p className="text-xl text-white font-bold text-center my-2">{title}</p>
            {children}
        </div>
    );
}
