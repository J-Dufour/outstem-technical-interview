import React from "react";

interface StatCardProps {
    title: string,
    children: React.ReactElement
}

export default function StatCard({ title, children }: StatCardProps) {

    return (
        <div className="w-fit px-2 py-4 m-4 bg-slate-300 rounded-lg">
            <p className="text-xl font-bold text-center my-2">{title}</p>
            {children}
        </div>
    );
}
