import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const OverlayWindowTemplate = ({
  children,
  isXCenter = true,
  isYCenter = true,
  className,
  onClose,
  actions,
  ...props
}: {
  children: React.ReactNode;
  isXCenter?: boolean;
  isYCenter?: boolean;
  className?: string;
  onClose: () => void;
  actions?: React.ReactNode;
}) => {
  return (
    <section
      className="w-full max-h-full- h-screen bg-[#0000006d] select-none overflow-hidden fixed z-50 left-0 top-0 flex items-center justify-center"
      {...props}
    >
      <div
        className={`w-full md:w-1/3 h-full min-h-full md:min-h-[90%] md:max-h-[90%] overflow-hidden bg-[#ffffff] md:rounded-2xl flex flex-col relative pointer-events-auto ${isXCenter ? "items-center" : "items-start"
          } ${isYCenter ? "justify-center" : "justify-start"} ${className}`}
      >
        <div className="flex items-center justify-between border-b w-full pt-5- py-2 px-2  md:px-5">
          <GoArrowLeft
            onClick={onClose}
            className={`cursor-pointer text-gray-600 inline-block hover:scale-125 transition text-3xl`}
          />

          <div className="flex items-center gap-2">
            {actions}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default OverlayWindowTemplate;
