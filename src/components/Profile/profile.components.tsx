export const Badge = ({ icon = null, logoSrc = null, alt = "Favorite Club icon", title, subtitle, diraction = "l" }: { icon?: React.ReactNode, logoSrc?: string | null, alt?: string, title: string, subtitle: string, diraction?: "l" | "r" | "c" }) => {
    return (
        <div className={`text-[#5f5f5f] w-[calc(33.33vw-16px)]- w-full items-center flex text-sm gap-2 ${diraction == "r" ? "justify-end" : diraction == "c" ? "justify-center" : "justify-start"} `}>
            {logoSrc ? <img className="w-8 h-8 max-w-8 min-w-8 max-h-8 min-h-8" src={logoSrc} alt={alt} /> : <span className="text-2xl leading-none bg-red-300- mb-2- h-fit">{icon}</span>}
            <div className="flex flex-col gap-1">
                <span className="leading-none text-base text-[#1F1F1F] whitespace-nowrap max-w-full- text-nowrap max-w-[calc(33.33vw-56px)] text-ellipsis overflow-hidden">{title}</span>
                <span className="leading-none text-sm text-[#616161]">{subtitle}</span>
            </div>
        </div>
    );
}