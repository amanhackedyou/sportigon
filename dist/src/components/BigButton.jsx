import React from 'react';
import SvgImage from './SvgImage';
const BigButton = ({ onClick, text, isProcessing, isActive, onDeactivateClick = () => { } }) => {
    return (<button onClick={isProcessing ? () => { } : isActive ? onClick : onDeactivateClick} className={`${isActive ? "opacity-100 active:bg-[#005700]" : "opacity-50 cursor-not-allowed"} ${isProcessing ? "bg-opacity-50" : ""} flex items-center mt-2 text-lg gap-2 bg-[#0CAC0B]  bg-[#648EFC]- text-white font-bold px-4 py-2 rounded-full w-full justify-center cursor-pointer`}>
            {isProcessing ? "" : text}

            <SvgImage src="/icons/loading.svg" className={`w-7 text-white ${isProcessing ? "" : "hidden"}`}/>
        </button>);
};
export default BigButton;
//# sourceMappingURL=BigButton.jsx.map