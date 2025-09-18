import Link from 'next/link';
import React from 'react'

const InteractionButton = ({ icon, numbers, name, href = "#", diraction = "l" }: { icon?: React.ReactNode, numbers: number | string, name: string, href?: string, diraction?: "l" | "r" | "c" }) => {
    return (
        <Link
            href={href}
            className={`flex flex-col- text-[#3A3A3A] items-center border-r- bg-red-100- gap-2 w-full ${diraction == "r" ? "justify-end" : diraction == "c" ? "justify-center" : "justify-start"}`}
        >
            {/* <div className='flex items-center gap-1'>
                <span>{icon}</span>
                <span className='text-sm font-semibold'>{numbers}</span>
            </div> */}
            <span className='text-sm- text-base font-semibold text-[#0C0C0C]'>{numbers}</span>
            <span className='text-sm- text-base'>{name}</span>
        </Link>
    )
}

export default InteractionButton;

export const InteractionButtonSeparator = () => {
    return (
        <div className='min-w-[1px] h-6 bg-gray-300 mx-2'></div>
    )
}