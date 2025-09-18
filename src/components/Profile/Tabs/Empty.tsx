import React from 'react'

const EmptyTab = ({ text, subText }: { text: string; subText: string }) => {
    return (
        <div className='flex flex-col w-full items-center py-6 h-full justify-center'>
            <h2 className='text-center text-[#3D5553] text-lg'>{text}</h2>
            <p className='text-center text-[#7D9491] text-sm'>{subText}</p>
        </div>
    )
}

export default EmptyTab