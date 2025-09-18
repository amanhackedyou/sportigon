"use client"

export default function LoadingPage() {
    return (
        <section className="fixed inset-0 z-[9999] flex flex-col h-screen items-center justify-center bg-white">
            <div className='flex flex-col  items-center justify-center h-full w-full animate-fade transition-all duration-500'>
                <img
                    src="/icons/logo_green.svg"
                    alt="Loading..."
                    className="w-[70%]"
                />
                <img
                    src="/icons/loading.svg"
                    alt="Loading..."
                    className="w-16"
                />
            </div>
        </section>
    );
}
